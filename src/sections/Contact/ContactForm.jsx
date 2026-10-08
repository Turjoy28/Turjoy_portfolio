import useContactForm from '../../hooks/useContactForm';
import FormField from './FormField';

const FIELDS = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+88...' },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Email subject' },
  { name: 'message', label: 'Message', as: 'textarea', placeholder: 'Your message here...', rows: 5 },
];

const STATUS_COLORS = {
  error: '#ff6b6b',
  pending: '#9acd32',
  success: '#4ade80',
};

/** Right column: validated contact form that sends via EmailJS. */
function ContactForm() {
  const { values, errors, status, isSending, handleChange, handleBlur, handleSubmit } =
    useContactForm();

  return (
    <div className="contact-box contact-form-wrapper">
      <form id="contactForm" onSubmit={handleSubmit}>
        <h3>Send Me a Message</h3>
        <p className="form-subtitle">Fill in the details below and I&apos;ll get back to you soon.</p>

        {FIELDS.map((field) => (
          <FormField
            key={field.name}
            {...field}
            value={values[field.name]}
            error={errors[field.name]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ))}

        <button type="submit" className="btn" disabled={isSending}>
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
        <div
          className="status"
          id="status"
          role="status"
          aria-live="polite"
          style={{ color: STATUS_COLORS[status.type] }}
        >
          {status.message}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
