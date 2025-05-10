import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import Store from './Store/index';
import { RouterProvider } from 'react-router-dom';
import clientRoutes from './Routes/index';
import { LanguageProvider } from './Utils/LanguageContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <LanguageProvider>
        <RouterProvider router={clientRoutes} />
      </LanguageProvider>
    </Provider>
  </StrictMode>
);
