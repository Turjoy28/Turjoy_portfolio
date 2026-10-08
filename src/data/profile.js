import {
  faFacebook,
  faFacebookF,
  faLinkedin,
  faLinkedinIn,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const profile = {
  name: 'Saif Saruwar',
  roles: ['FullStack Developer', 'Software Designer', 'Programmer', 'Youtuber'],
  bio:
    'As a CSE graduate from Ahsanullah University of Science & Technology, I have developed strong ' +
    'proficiency in modern web technologies, especially the MERN stack. I have built multiple ' +
    'real-world projects that strengthened my problem-solving and development skills. I am highly ' +
    'motivated to join a dynamic team where I can contribute, learn, and help deliver high-quality ' +
    'products that drive business growth.',
  image: 'images/home2.png',
  cv: 'cv/Dev_Turjoy.pdf',
};

/**
 * Social profiles. `icon` is used in the hero section,
 * `compactIcon` in the contact section.
 */
export const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/saifsarowar.dlxturjoy/',
    icon: faFacebook,
    compactIcon: faFacebookF,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/saif-saruwar-turjoy-441741235/',
    icon: faLinkedin,
    compactIcon: faLinkedinIn,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Turjoy28',
    icon: faGithub,
    compactIcon: faGithub,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UC3W_VtB_rMLpmtlSiINE3WQ',
    icon: faYoutube,
    compactIcon: faYoutube,
  },
];

export const contactDetails = [
  {
    label: 'Phone',
    value: '(+88) 01870801955',
    href: 'tel:+8801870801955',
    icon: faPhone,
  },
  {
    label: 'Email',
    value: 'saifbus28@gmail.com',
    href: 'mailto:saifbus28@gmail.com',
    icon: faEnvelope,
  },
  {
    label: 'Location',
    value: 'Mohanagar Project, Rampura, Dhaka',
    icon: faLocationDot,
  },
];
