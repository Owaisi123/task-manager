import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import "./index.css";
import App from "./App";
import { UserAuthProvider } from './Context/UserAuth';
import { SocialLinksProvider } from './Context/Social';
import { LogoutUserProvider } from './Context/Logout';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LogoutUserProvider>
      <SocialLinksProvider>
        <UserAuthProvider>
          <App />
        </UserAuthProvider>
      </SocialLinksProvider>
    </LogoutUserProvider>
  </StrictMode>
);