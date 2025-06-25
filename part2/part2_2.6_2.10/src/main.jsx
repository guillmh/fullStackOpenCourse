import "@radix-ui/themes/styles.css";
import { createRoot } from "react-dom/client";
import { Theme, ThemePanel } from "@radix-ui/themes";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Theme hasBackground="true" appearance="dark" radius="large">
    <App />
  </Theme>
);
