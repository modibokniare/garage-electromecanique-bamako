import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// Injection dynamique du theme-color pour compatibilité mobile/PWA tout en évitant les avertissements statiques HTML
if (!document.querySelector('meta[name="theme-color"]')) {
  const meta = document.createElement("meta");
  meta.name = "theme-color";
  meta.content = "#08090a";
  document.head.appendChild(meta);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
