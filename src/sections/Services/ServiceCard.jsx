import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

function ServiceCard({ icon, title, description }) {
  return (
    <div className="Services_box">
      <div className="icon">
        <FontAwesomeIcon icon={icon} className="service-icon" />
        <a href="#contact" aria-label={`Get in touch about ${title}`}>
          <span>Click</span>
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </a>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
