import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Asegúrate de que el elemento con id 'root' existe en el HTML
const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('El elemento con id "root" no se encontró en el documento.');
}
