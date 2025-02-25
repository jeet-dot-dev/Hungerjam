import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './Context/Context.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Auth0Provider } from '@auth0/auth0-react';

// Root render method with Auth0, Context, Router, and Toast setup
createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain='dev-vmhvceggr7jk1uzx.us.auth0.com'
    clientId={import.meta.env.VITE_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: import.meta.env.VITE_AUDIENCE_URL,
    }}
  >
    <StoreContextProvider>
      <BrowserRouter>
        <StrictMode>
          <ToastContainer /> {/* For toast notifications */}
          <App /> {/* Main application component */}
        </StrictMode>
      </BrowserRouter>
    </StoreContextProvider>
  </Auth0Provider>
);
