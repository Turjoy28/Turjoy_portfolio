import { useCallback, useEffect, useRef, useState } from 'react';
import { sendContactEmail } from '../services/emailService';
import { hasErrors, validateField, validateForm } from '../utils/validators';

const INITIAL_VALUES = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const EMPTY_STATUS = { message: '', type: '' };
const STATUS_CLEAR_DELAY = 5000;

/**
 * Encapsulates contact form state, validation and EmailJS submission.
 * Status `type` is one of: '' | 'pending' | 'success' | 'error'.
 */
export default function useContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(EMPTY_STATUS);
  const [isSending, setIsSending] = useState(false);
  const clearTimer = useRef(null);

  useEffect(() => () => clearTimeout(clearTimer.current), []);

  const runFieldValidation = useCallback((name, value) => {
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }, []);

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setValues((prev) => ({ ...prev, [name]: value }));
      // Re-validate live only once the field is already showing an error.
      if (errors[name]) runFieldValidation(name, value);
    },
    [errors, runFieldValidation],
  );

  const handleBlur = useCallback(
    (event) => runFieldValidation(event.target.name, event.target.value),
    [runFieldValidation],
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (hasErrors(nextErrors)) {
      setStatus({ message: 'Please fix the errors above before sending.', type: 'error' });
      return;
    }

    clearTimeout(clearTimer.current);
    setIsSending(true);
    setStatus({ message: 'Sending message...', type: 'pending' });

    try {
      await sendContactEmail({
        title: values.subject, // maps to template {{title}}
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
        time: new Date().toLocaleString(),
      });

      setStatus({
        message: "✓ Message sent successfully! I'll get back to you soon.",
        type: 'success',
      });
      setValues(INITIAL_VALUES);
      setErrors({});
      clearTimer.current = setTimeout(() => setStatus(EMPTY_STATUS), STATUS_CLEAR_DELAY);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({ message: '✗ Failed to send message. Please try again.', type: 'error' });
    } finally {
      setIsSending(false);
    }
  };

  return { values, errors, status, isSending, handleChange, handleBlur, handleSubmit };
}
