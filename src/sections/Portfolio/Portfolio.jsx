import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import './Portfolio.css';

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastIndex = projects.length - 1;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === lastIndex;

  const goPrev = () => setCurrentIndex((i) => Math.max(i - 1, 0));
  const goNext = () => setCurrentIndex((i) => Math.min(i + 1, lastIndex));

  return (
    <section className="Portfolio" id="portfolio">
      <SectionHeading title="Personal" highlight="Projects" />
      <p className="portfolio-subtitle">Showcasing my recent work and technical expertise</p>

      <div className="portfolio-wrapper">
        <button
          type="button"
          className={`portfolio-nav arrow-left${isFirst ? ' disabled' : ''}`}
          onClick={goPrev}
          disabled={isFirst}
          aria-label="Previous project"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="portfolio-slider">
          {/* All cards stay mounted so each gallery keeps its own image position. */}
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              number={index + 1}
              isActive={index === currentIndex}
            />
          ))}
        </div>

        <button
          type="button"
          className={`portfolio-nav arrow-right${isLast ? ' disabled' : ''}`}
          onClick={goNext}
          disabled={isLast}
          aria-label="Next project"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="project-indicators">
        {projects.map((project, index) => (
          <button
            type="button"
            key={project.id}
            className={`indicator${index === currentIndex ? ' active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show project ${index + 1}: ${project.title}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
