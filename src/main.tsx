import React from "react";
import ReactDOM from "react-dom/client";
import Page from "./pages/DictionaryPage/index.tsx";
import { DarkModeProvider } from "./context/DarkModeContext/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkModeProvider>
      <Page />
    </DarkModeProvider>
  </React.StrictMode>,
);
