/**
 * EmailJS credentials. These are public (client-side) keys by design.
 * Override them with VITE_* variables in a `.env` file (see `.env.example`).
 */
export const EMAILJS_CONFIG = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'GvSwLTdaQpXqPGEPr',
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_j121q69',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_k4sfxrt',
};
