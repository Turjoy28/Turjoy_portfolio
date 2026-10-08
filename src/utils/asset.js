/**
 * Resolve a file inside the `public/` folder to a URL that respects Vite's
 * configured `base`, so static assets work in dev and in any deploy path.
 *
 * @example asset('images/home2.png') // -> './images/home2.png'
 */
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

/** True for absolute http(s) links that should open in a new tab. */
export const isExternalUrl = (url) => /^https?:\/\//i.test(url);
