import React from 'react';
import ReactDOM from 'react-dom/client';
import RedesignPage from './RedesignPage';
import '../styles/tailwind.css';
import '../styles/globals.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RedesignPage />
    </React.StrictMode>
  );
}
