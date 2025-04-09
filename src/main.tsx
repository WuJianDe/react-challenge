import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@ant-design/v5-patch-for-react-19";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext";
console.warn = (msg) => {
  if (msg.includes("[antd: compatible]")) return;
  console.error(msg);
};
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
