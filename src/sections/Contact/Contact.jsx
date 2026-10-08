import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import './Contact.css';

function Contact() {
  return (
    <section className="Contact" id="contact">
      <SectionHeading title="Get In" highlight="Touch" />
      <p className="contact-subtitle">Let&apos;s collaborate and create something amazing together</p>

      <div className="contact-container">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
