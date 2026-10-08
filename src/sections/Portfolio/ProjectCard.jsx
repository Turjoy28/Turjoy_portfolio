import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { isExternalUrl } from '../../utils/asset';
import ImageGallery from './ImageGallery';

/** Adds new-tab attributes for external links only. */
const linkProps = (url) =>
  isExternalUrl(url) ? { href: url, target: '_blank', rel: 'noopener noreferrer' } : { href: url };

function ProjectCard({ project, number, isActive }) {
  const { category, title, description, tech, images, liveUrl, sourceUrl } = project;

  return (
    <article className={`project-card${isActive ? ' active' : ''}`} aria-hidden={!isActive}>
      <ImageGallery images={images} number={number} />

      <div className="project-content">
        <span className="project-category">{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-tech">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-links">
          <a {...linkProps(liveUrl)} className="project-btn">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Live Demo
          </a>
          <a {...linkProps(sourceUrl)} className="project-btn github">
            <FontAwesomeIcon icon={faGithub} /> Source Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
