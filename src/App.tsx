import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './componets/navbar/Navbar';
import Slider from './componets/Slider/Slider';
import Viewers from './componets/Viewers/Viewers';
import Movies from './componets/Movies/Movies';
import Series from './componets/Series/Series';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componets/Home/Home';
import OneMovie from './componets/Movies/OneMovie';
import OneSerie from './componets/Series/OneSerie';



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
