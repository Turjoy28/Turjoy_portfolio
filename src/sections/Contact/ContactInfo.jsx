import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contactDetails, socialLinks } from '../../data/profile';

/** Left column: quick contact details and social profiles. */
function ContactInfo() {
  return (
    <div className="contact-info-wrapper">
      <div className="contact-box contact-left">
        <h3>Quick Contact</h3>
        <p className="desc">
          &quot;I&apos;m ready to bring my skills and energy to make a meaningful impact. Reach out,
          and I&apos;ll respond promptly!&quot;
        </p>

        <div className="contact-details-compact">
          {contactDetails.map(({ label, value, href, icon }) => (
            <div className="contact-detail-item" key={label}>
              <div className="icon-box">
                <FontAwesomeIcon icon={icon} />
              </div>
              <div className="detail-content">
                <span className="detail-label">{label}</span>
                {href ? <a href={href}>{value}</a> : <p>{value}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="social-links">
          <h4>Connect With Me</h4>
          <div className="social-icons">
            {socialLinks.map(({ name, url, compactIcon }) => (
              <a
                key={name}
                href={url}
                className="social-link"
                title={name}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={compactIcon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
