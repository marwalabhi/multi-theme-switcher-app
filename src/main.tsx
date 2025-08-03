import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import ErrorBoundary from './components/Error/ErrorBoundary.tsx';

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<h1>Oops! something went wrong</h1>}>
    <StrictMode>
      <App />
    </StrictMode>
  </ErrorBoundary>
);
