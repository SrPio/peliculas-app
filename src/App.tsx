import React from "react";
import "./App.css";
import Navbar from "./componets/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componets/Home/Home";
import OneMovie from "./componets/Movies/OneMovie";
import OneSerie from "./componets/Series/OneSerie";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<OneMovie />} />
          <Route path="/serie/:id" element={<OneSerie />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
