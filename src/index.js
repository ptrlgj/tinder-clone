import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.scss';
import App from './App';
import { AppProvider } from './contexts';

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App /> 
    </AppProvider>
  </React.StrictMode>
)

