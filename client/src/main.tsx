import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CustomCursor } from './components/ui/CustomCursor';
import { MotionProvider } from './components/motion/MotionProvider';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MotionProvider>
        <CustomCursor />
        <App />
      </MotionProvider>
    </BrowserRouter>
  </StrictMode>,
);
