import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { VideoProvider } from "../hooks/videoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VideoProvider>
      <App />
    </VideoProvider>
  </StrictMode>
);
