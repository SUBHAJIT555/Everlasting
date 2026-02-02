import { StrictMode } from 'react'
import { createRoot, } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';


const rootElement = document.getElementById('root')!



// if (rootElement.hasChildNodes()) {
//   hydrateRoot(
//     rootElement,
//     <StrictMode>
//       <App />
//     </StrictMode>
//   )
// } else {
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>)
// }

