import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

/**
 * Sends the contact form payload through EmailJS.
 * `params` keys must match the variables used in the EmailJS template.
 */
export const sendContactEmail = (params) =>
  emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, params, {
    publicKey: EMAILJS_CONFIG.publicKey,
  });
