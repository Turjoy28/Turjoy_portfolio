import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base keeps the build portable (works at a domain root or a
  // sub-path such as GitHub Pages: https://<user>.github.io/Turjoy_portfolio/).
  base: './',
});
