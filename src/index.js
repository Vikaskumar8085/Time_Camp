import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import swDev from "./swDev";
import { HelmetProvider } from "react-helmet-async";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="189595369066-lk3ped7489jrnlmt471ij31plt6eso29.apps.googleusercontent.com">
    {/* <GoogleOAuthProvider> */}
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
    {/* </GoogleOAuthProvider> */}
  </Provider>
);
swDev();
