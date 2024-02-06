import BodyHome from './Components/BodyHome/BodyHome'
import Destination from './Components/Destination/Destination'
import DestinationMars from './Components/Destination/DestinationMars'
import DestinationEuropa from './Components/Destination/DestinationEuropa'
import DestinationTitan from './Components/Destination/DestinationTitan'
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CrewLayout from './Components/Layouts/CrewLayout'
import TechnologyLayout from './Components/Layouts/TechnologyLayout'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/FED_Bootcamp' exact element={<BodyHome />}></Route>
          <Route path='destination' element={<Destination />}></Route>
          <Route path='destination-mars' element={<DestinationMars />}></Route>
          <Route path='destination-europa' element={<DestinationEuropa />}></Route>
          <Route path='destination-titan' element={<DestinationTitan />}></Route>
          <Route path='Crew' element={<CrewLayout />}></Route>
          <Route path='Technology' element={<TechnologyLayout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;