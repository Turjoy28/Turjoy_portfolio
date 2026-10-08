import { useCallback, useEffect, useState } from 'react';

/**
 * Manages the active theme ('dark' | 'light').
 * The theme will always start as 'dark' on page load, ensuring the intended experience.
 */
export default function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}
