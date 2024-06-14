import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "../src/theme/theme.jsx";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import GlobalProvider from "./context/GlobalContexts.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalProvider>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </GlobalProvider>
    </ThemeProvider>
  </React.StrictMode>
);
