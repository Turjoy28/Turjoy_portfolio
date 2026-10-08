/**
 * Portfolio projects. Image paths are relative to the `public/` folder.
 * Use '#' for links that are not available yet.
 */
export const projects = [
  {
    id: 'e-shopcart',
    category: 'Full Stack E-Commerce',
    title: 'E-ShopCart - Production Ready',
    description:
      'A premium eCommerce platform powering real transactions with SSLCommerz gateway integration ' +
      '(bKash, Nagad, Card payments). Features Redis-optimized caching, JWT security with HTTP-only ' +
      'cookies, smart coupon validation, and complete order lifecycle management. Admin dashboard for ' +
      'product & payment analytics. Deployed on Render with Cloudinary CDN for lightning-fast media ' +
      'delivery.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Redis', 'Tailwind CSS', 'SSLCommerz'],
    images: [
      { src: 'images/ecommerce_home.png', alt: 'E-ShopCart Categories' },
      { src: 'images/ecommerce_signup.png', alt: 'E-ShopCart Authentication' },
      { src: 'images/ecommerce_dashboard.png', alt: 'E-ShopCart Admin Dashboard' },
      { src: 'images/ecommerce_payment.png', alt: 'E-ShopCart Payment Gateway' },
    ],
    liveUrl: 'https://lnkd.in/gSRhh5iy',
    sourceUrl: 'https://lnkd.in/gpEU-D6v',
  },
  {
    id: 'blogify',
    category: 'Full Stack',
    title: 'Blogify (MERN Stack)',
    description:
      'A full-featured blogging platform with secure authentication and authorization. Implemented ' +
      'token-based login, encrypted passwords, and role-based access so only authenticated users can ' +
      'create, update, or delete posts.',
    tech: ['JavaScript', 'Node.js', 'EJS', 'MongoDB'],
    images: [
      { src: 'images/Blogify.png', alt: 'Blogify Project' },
      { src: 'images/halim_blog.png', alt: 'Blogify Features' },
      { src: 'images/blog_Comments.png', alt: 'Blogify Comments' },
    ],
    liveUrl: '#',
    sourceUrl: 'https://github.com/Turjoy28/Blogify-App',
  },
  {
    id: 'daily-notify',
    category: 'Productivity App',
    title: 'Daily_Notify',
    description:
      'A productivity-focused web application for recording and tracking daily tasks. Features a clean ' +
      'dashboard with Google Authentication (OAuth), ensuring seamless and secure login experience.',
    tech: ['JavaScript', 'Node.js', 'OAuth 2.0', 'MongoDB'],
    images: [
      { src: 'images/Note_hompage.png', alt: 'Daily Notify Home' },
      { src: 'images/Note_Dashboard.png', alt: 'Daily Notify Dashboard' },
      { src: 'images/notify_Daily.png', alt: 'Daily Notify Features' },
    ],
    liveUrl: '#',
    sourceUrl: 'https://github.com/Turjoy28/Notify_Daily',
  },
  {
    id: 'url-shortener',
    category: 'Backend',
    title: 'URL Shortener',
    description:
      'A backend-focused project built with Node.js that converts long URLs into short, shareable ' +
      'links using UUID. Designed for efficiency, scalability, and quick redirection.',
    tech: ['Node.js', 'Express', 'UUID', 'Postman'],
    images: [{ src: 'images/url_Shortner.png', alt: 'URL Shortener Project' }],
    liveUrl: '#',
    sourceUrl: 'https://github.com/Turjoy28/URL_Shortner',
  },
  {
    id: 'rest-api',
    category: 'API Development',
    title: 'REST API & JS Projects',
    description:
      'A fully backend-focused REST API with CRUD operations, including a Weather App integrating ' +
      'external APIs. Also built frontend projects like Stopwatch and file upload features.',
    tech: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    images: [{ src: 'images/rest_api.png', alt: 'REST API Project' }],
    liveUrl: '#',
    sourceUrl: 'https://github.com/Turjoy28/Rest_Api-CRUD-',
  },
  {
    id: 'billing-system',
    category: 'Desktop Application',
    title: 'Billing Management System',
    description:
      'An admin-focused application for managing products, generating and printing bills. Built with ' +
      'Java for backend logic and MS SQL for data management.',
    tech: ['Java', 'MS SQL', 'NetBeans', 'Threads'],
    images: Array.from({ length: 9 }, (_, i) => ({
      src: `images/billing_img${i + 1}.png`,
      alt: `Billing System ${i + 1}`,
    })),
    liveUrl: '#',
    sourceUrl: '#',
  },
];
