import {
  faHouse,
  faGear,
  faFileLines,
  faFolderOpen,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

/** Main navigation. `id` must match the section element id. */
export const navLinks = [
  { id: 'home', label: 'Home', icon: faHouse },
  { id: 'services', label: 'Services', icon: faGear },
  { id: 'resume', label: 'Resume', icon: faFileLines },
  { id: 'portfolio', label: 'Portfolio', icon: faFolderOpen },
  { id: 'contact', label: 'Contact', icon: faEnvelope },
];

export const sectionIds = navLinks.map((link) => link.id);
