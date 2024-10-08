import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HoverContextProvider } from "./Context/HoverLink.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HoverContextProvider>
      <App />
    </HoverContextProvider>
  </BrowserRouter>
);
