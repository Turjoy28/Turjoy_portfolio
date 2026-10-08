import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { asset } from '../../utils/asset';

/** Looping screenshot gallery shown on the left side of a project card. */
function ImageGallery({ images, number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = images.length;
  const hasMultiple = total > 1;

  const showPrev = () => setCurrentIndex((i) => (i - 1 + total) % total);
  const showNext = () => setCurrentIndex((i) => (i + 1) % total);

  return (
    <div className="project-image">
      {hasMultiple && (
        <button
          type="button"
          className="img-nav img-prev"
          onClick={showPrev}
          aria-label="Previous screenshot"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}

      <div className="img-gallery">
        {images.map(({ src, alt }, index) => (
          <img
            key={src}
            src={asset(src)}
            alt={alt}
            className={index === currentIndex ? 'active' : ''}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>

      {hasMultiple && (
        <button
          type="button"
          className="img-nav img-next"
          onClick={showNext}
          aria-label="Next screenshot"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}

      <div className="image-overlay">
        <span className="project-number">{String(number).padStart(2, '0')}</span>
      </div>

      <div className="img-counter">
        <span className="current-img">{currentIndex + 1}</span> /{' '}
        <span className="total-img">{total}</span>
      </div>
    </div>
  );
}

export default ImageGallery;
