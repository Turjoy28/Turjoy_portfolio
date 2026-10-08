import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Font Awesome: load its CSS up-front (instead of runtime injection) so our
// own stylesheets reliably come after it in the cascade.
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import './styles/global.css';
import App from './App.jsx';

config.autoAddCss = false;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
