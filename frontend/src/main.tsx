import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

import "./styles/variables.css";
import "./styles/global.css";
import ServerLoading from "./components/server-loading/ServerLoading.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ServerLoading>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ServerLoading>
  </StrictMode>,
);
