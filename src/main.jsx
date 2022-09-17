import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Coutry from "./pages/Country";
import Home from "./pages/Home";
import GlobalStyled from "./styles/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="country/:id" element={<Coutry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
