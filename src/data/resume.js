import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faVuejs,
  faCss3,
  faNodeJs,
  faAws,
  faDocker,
  faLinux,
  faDigitalOcean,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

export const resumeIntro = {
  title: 'Why Hire Me?',
  description:
    '"I am a results-driven Full-Stack Engineer focused on solving complex business problems and fulfilling client needs through high-impact web applications. By architecting performance-optimized frontend interfaces and robust backend systems with precision, I build scalable software explicitly designed to accelerate company growth and maximize operational efficiency."',
};

/**
 * Resume tabs. `id` doubles as the CSS modifier class on `.resume_detail`
 * and `type` selects which list component renders the items.
 */
export const resumeTabs = [
  {
    id: 'experience',
    label: 'Experience',
    type: 'timeline',
    heading: { title: 'My', highlight: 'Experience ' },
    description:
      'Self-driven learning and hands-on experience building web applications using the MERN stack, ' +
      'with a focus on clean code, problem-solving, and modern technologies.',
    items: [
      {
        year: '2026 – Present',
        title: 'Software Developer Intern',
        company: 'Okobiz Onsite',
        points: [
          'Engineered Manbazar, a Next.js and MERN stack eCommerce platform featuring a dynamic admin UI, automated order management system, and third-party courier API integration.',
          'Developed Petvet, a dual-purpose platform combining veterinary doctor appointment scheduling with an integrated e-commerce store for pet supplies.',
          'Initiated development of a scalable Pharmacy SaaS for end-to-end pharmacy management, and deployed a customized Advocate Profile management system.',
        ],
      },
      {
        year: '2026 – Present',
        title: 'Pharmacy SaaS Platform',
        company: 'Personal Project | Next.js, Node.js, PostgreSQL, Multi-Tenant',
        description:
          'Currently architecting and developing an end-to-end multi-tenant Pharmacy SaaS independently, analyzing complex business requirements to build scalable workflows connecting enterprise Super Admins down to shopkeeper POS terminals.',
      },
      {
        year: '2026',
        title: 'Manbazar eCommerce',
        company: 'Okobiz Onsite | Next.js, MERN Stack, Courier API',
        description:
          'Engineered Manbazar, a Next.js and MERN stack eCommerce platform featuring a dynamic admin UI, automated order management system, and third-party courier API integration to optimize client logistics and drive sales conversions.',
        links: [
          { label: 'Live Link', url: 'https://manbazar.com/' },
        ],
      },
      {
        year: '2026',
        title: 'Petvet Healthcare & Retail',
        company: 'Okobiz Onsite | React.js, Node.js, Express, MongoDB',
        description:
          'Developed Petvet, a dual-purpose platform combining veterinary doctor appointment scheduling with an integrated e-commerce store for pet supplies to eliminate booking friction and boost retail revenue.',
        links: [
          { label: 'Live Link', url: 'https://www.petvet-bd.com/' },
        ],
      },
      {
        title: 'eShopify',
        company: 'React.js, Node.js, MongoDB, Redis, JWT',
        description:
          'Engineered a high-performance full-stack eCommerce solution featuring SSLCommerz payment validation, Redis caching (35% speed boost), and JWT refresh tokens to drive seamless transactions and meet client scalability goals.',
        links: [
          { label: 'Live Link', url: 'https://eshopify-q96e.onrender.com/' },
          { label: 'GitHub Link', url: 'https://github.com/Turjoy28/eShopify' },
        ],
      },
      {
        title: 'Blogify',
        company: 'Node.js, JWT, Bcrypt, RBAC',
        description:
          'Developed a secure content management platform with Role-Based Access Control (RBAC) and encrypted authentication to protect data integrity and fulfill client enterprise security standards.',
        links: [
          { label: 'Live Link', url: 'https://blogify-app-1sp0.onrender.com/' },
          { label: 'GitHub Link', url: 'https://github.com/Turjoy28/Blogify-App' },
        ],
      },
      {
        title: 'Daily Notify',
        company: 'Node.js, Express.js, MongoDB, OAuth 2.0',
        description:
          'Built a scalable MVC productivity application integrated with Google OAuth 2.0 to streamline user task management workflows and enhance client platform engagement.',
        links: [
          { label: 'Live Link', url: 'https://notify-daily.onrender.com/' },
          { label: 'GitHub Link', url: 'https://github.com/Turjoy28/Notify_Daily' },
        ],
      },
    ],
  },
  {
    id: 'Education',
    label: 'Education',
    type: 'timeline',
    heading: { title: 'My', highlight: 'Education' },
    description:
      '"Knowledge empowers, skills transform, and education unlocks endless possibilities."',
    items: [
      {
        year: '2021 - 2025',
        title: 'BSC in CSE Ahsanullah University of Science & Technology',
        description:
          'CSE graduate (Batch 46) skilled in full-stack development, leadership, and teamwork; a ' +
          'proactive problem-solver ready to make an impact.',
      },
      {
        year: '2018-2020',
        title: 'Milestone College',
        company: 'In pandamic situation',
        description:
          'Intermediate (HSC), Milestone College – Completed in 2 years with GPA 5.0',
      },
      {
        year: 'before 2018',
        title: 'Annada Goverment School,Brahmanbaria',
        company: 'My childhood',
        description:
          'Completed with strong academic results while enjoying a memorable high school experience.',
      },
    ],
  },
  {
    id: 'skill',
    label: 'Skills',
    type: 'skills',
    heading: { title: 'My', highlight: 'Skills' },
    description:
      "Throughout my journey, I've mastered full-stack web development with MERN stack, building " +
      "scalable applications with clean, maintainable code. I've also developed expertise in database " +
      'management, deep learning, and NLP, enabling me to create intelligent systems that solve ' +
      'real-world problems effectively.',
    items: [
      { name: 'HTML5', icon: faHtml5 },
      { name: 'CSS3', icon: faCss3Alt },
      { name: 'JavaScript', icon: faJs },
      { name: 'React.js', icon: faReact },
      { name: 'Vue.js', icon: faVuejs },
      { name: 'Tailwind Css', icon: faCss3 },
      { name: 'Node.js', icon: faNodeJs },
      { name: 'MongoDB , MySQL , PostgreSQL', icon: faDatabase },
      { name: 'AWS', icon: faAws },
      { name: 'CI/CD', icon: faCodeBranch },
      { name: 'Docker', icon: faDocker },
      { name: 'Linux', icon: faLinux },
      { name: 'DigitalOcean', icon: faDigitalOcean },
      { name: 'Hosting', icon: faServer },
    ],
  },
  {
    id: 'about',
    label: 'About Me',
    type: 'about',
    heading: { title: 'About', highlight: 'ME' },
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, pariatur magnam dicta ' +
      'optio blanditiis explicabo.',
    items: [
      { label: 'Name', value: 'Saif Saruwar Turjoy' },
      { label: 'Gender', value: 'Male' },
      { label: 'Age', value: '23 Years Old' },
      { label: 'Status', value: 'Unmarried' },
      { label: 'City', value: 'Dhaka' },
      { label: 'Nationality', value: 'Bangladeshi' },
      { label: 'Experience', value: 'Fresher' },
      { label: 'Full Time', value: 'Available' },
      { label: 'Freelance/remote job', value: 'Available' },
      { label: 'Phone', value: '01870801955' },
      // Array values are rendered on separate lines.
      { label: 'Email', value: ['saifbus28@gmail.com/', 'amiturjoy28@gmail.com'] },
      { label: 'Language', value: 'English, hindi ,urdu' },
    ],
  },
];
