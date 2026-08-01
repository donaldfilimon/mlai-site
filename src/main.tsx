import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// Order matters: the vendored DS stylesheet first, so global.css and page styles
// stay later in the cascade — the same layering the prototype had.
import "./ds/fonts.css";
import "./ds/mlai-site.css";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
