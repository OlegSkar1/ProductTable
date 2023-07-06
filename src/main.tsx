import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import './app/styles/index.css';
import { StoreProvider } from './app/providers/StoreProvider/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
