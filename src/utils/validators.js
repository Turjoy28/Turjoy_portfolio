/**
 * Contact form validation rules (ported from the original script.js).
 * Each rule returns `true` when the value is valid.
 */
export const contactValidationRules = {
  name: {
    validate: (value) => value.trim().length >= 3,
    message: 'Name must be at least 3 characters long',
  },
  email: {
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message: 'Please enter a valid email address',
  },
  phone: {
    validate: (value) =>
      /^[\d\s\-+()]+$/.test(value) && value.replace(/\D/g, '').length >= 10,
    message: 'Please enter a valid phone number (at least 10 digits)',
  },
  subject: {
    validate: (value) => value.trim().length >= 3,
    message: 'Subject must be at least 3 characters long',
  },
  message: {
    validate: (value) => value.trim().length >= 10,
    message: 'Message must be at least 10 characters long',
  },
};

/** Returns the error message for a field, or an empty string if valid. */
export const validateField = (name, value) => {
  const rule = contactValidationRules[name];
  if (!rule) return '';
  return rule.validate(value) ? '' : rule.message;
};

/** Validates every field and returns a `{ [field]: errorMessage }` map. */
export const validateForm = (values) =>
  Object.keys(contactValidationRules).reduce((errors, name) => {
    errors[name] = validateField(name, values[name] ?? '');
    return errors;
  }, {});

export const hasErrors = (errors) => Object.values(errors).some(Boolean);
