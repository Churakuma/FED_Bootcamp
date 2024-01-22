import BodyHome from './Components/BodyHome/BodyHome'
import Destination from './Components/Destination/Destination'
import './App.css';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<BodyHome />}></Route>
          <Route path='destination' element={<Destination />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;