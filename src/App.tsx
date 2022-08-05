import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './componets/navbar/Navbar';
import Slider from './componets/Slider/Slider';
import Viewers from './componets/Viewers/Viewers';
import Movies from './componets/Movies/Movies';
import Series from './componets/Series/Series';



function App() {
  return (
    <div>
      <Navbar />
      <Viewers />
      <Movies />
      <Series />
    </div>
  );
}

export default App;
