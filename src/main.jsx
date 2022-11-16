import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Bebidas from "./pages/Bebidas"
import Inicial from "./pages/Inicial";
import Login from "./pages/Login";
import Pizzas from "./pages/Pizzas";

import { BrowserRouter , Routes, Route } from "react-router-dom";


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
      
          <Route path="/" element={<Inicial />}/>
          <Route path="/Pizzas" element={<Pizzas />}/>
          <Route path="/Bebidas" element={<Bebidas />}/>
          <Route path="/Login" element={<Login />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
