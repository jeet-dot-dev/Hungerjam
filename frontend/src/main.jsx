import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./Context/Context.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StoreContextProvider>
    <BrowserRouter>
      <StrictMode>
      <ToastContainer></ToastContainer>
        <App />
       
      </StrictMode>
      ,
    </BrowserRouter>
  </StoreContextProvider>
);
