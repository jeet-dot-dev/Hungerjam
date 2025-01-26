import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./Context/Context.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-vmhvceggr7jk1uzx.us.auth0.com"
    clientId="H8vqh3RnluXOa2IvoxBSLLEoWbiT4W8F"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://api.hungerjam.com",
    }}
  >
    <StoreContextProvider>
      <BrowserRouter>
        <StrictMode>
          <ToastContainer />
          <App />
        </StrictMode>
      </BrowserRouter>
    </StoreContextProvider>
  </Auth0Provider>
);
