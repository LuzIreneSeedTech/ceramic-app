import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { NavigationProvider } from "./context/navigation";

const element = document.getElementById("root");

if (element) {
  const root = ReactDOM.createRoot(element);

  root.render(
    <NavigationProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </NavigationProvider>
  );
} else {
  console.error("Root element not found");
}
