import { useEffect, useState } from 'react';

const OBSERVER_OPTIONS = {
  root: null,
  // A section becomes "active" once its top reaches the upper 15% of the viewport.
  rootMargin: '0px 0px -85% 0px',
  threshold: 0,
};

/**
 * Scroll-spy: tracks which section is currently at the top of the viewport.
 *
 * @param {string[]} sectionIds  Stable array of element ids to observe.
 * @returns {[string, Function]} The active id and a setter for manual updates
 *                               (e.g. when a nav link is clicked).
 */
export default function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(entry.target.id);
      });
    }, OBSERVER_OPTIONS);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return [activeId, setActiveId];
}
