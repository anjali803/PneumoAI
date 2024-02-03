import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="866957364547-1j19lobtm3edhsuutetb9ftnaei9ej5e.apps.googleusercontent.com">
      <App />;
    </GoogleOAuthProvider>
    ;
  </React.StrictMode>
);
