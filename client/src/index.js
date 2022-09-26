import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/Theme";
import { Provider } from "react-redux";
import authStore from "./components/Redux/Auth/authStore";
import propertyStore from "./components/Redux/Property/propertyStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={propertyStore}>
        <Provider store={authStore}>
          <App />
        </Provider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
