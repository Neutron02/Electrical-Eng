import React from 'react';
import './App.css';
import TitlePage from './Components/StartupPage/TitlePage';
import Pane from './Components/StartupPage/Pane';
import Carousel from './Components/StartupPage/Carousel';
import NavBar from './Components/NavBarComp/NavBar';
import FeaturedSection from './Components/StartupPage/FeaturedSection';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OurStory from "../src/Components/About/OurStory";
import C_Home from './Components/C-Programming/C_Home';

// ... your tileData array ...

const tileData = [
  {id: "transistor", title: 'Transistor', popupText: 'What is a transistor?+ \nA transistor is a semiconductor device often made up of n-type and p-type materials. It is used to amplify or switch electronic signals and electrical power. It is composed of three terminals: the emitter, the base, and the collector. '},
  {id: "resistor", title: 'Resistor', popupText: "A resistor is a device made up of an insulating material. It's main purpose is to resistor current (to lower the change in charge over time)."},
  {id: "capacitor", title: 'Capacitor', popupText: 'A capacitor is a 2 point device where two conductive materials are placed a distance D away from each other, creating an open circuit in steady state DC conditions. The capacitance of the device is defined as the ratio of the charge on the plates to the voltage between them. The capacitance is a function of the distance between the plates, the area of the plates, and the permittivity of the material between the plates.'},
  {id: "inductor", title: 'Inductor', popupText: 'An inductor is a device that stores energy in a magnetic field. The voltage across inductors is proportional to the rate of change of current through the inductor. The inductance of the device is defined as the ratio of the voltage across the inductor to the rate of change of current through the inductor. The inductance is a function of the number of turns of wire in the inductor, the area of the wire, and the permeability of the material the wire is made of.'},
];

for(let i = 0; i < 15; i++) {
  tileData.push({id: `${i + 4}`, title: `Tile ${i}`, popupText: `Popup text for tile ${i}`});
}
// <Routes>
{/* <Route path="/ourstory" element={<OurStory />} /> */}
// </Routes>
function App() {
  return (
    <Router>
      <div className="App">
        
        <NavBar />
        <Routes>
          <Route path={"/"} element={
            <>
            <TitlePage />
            <div id="selections">
              <Carousel tilesData={tileData} />
            </div>
            <FeaturedSection title="Transistor" paragraph="Transistor text" id="tile-transistor-section" />
            <FeaturedSection title="Resistor" id="tile-resistor-section" />
            <FeaturedSection title="Capacitor" id="tile-capacitor-section" />
            <FeaturedSection title="Inductor" id="tile-inductor-section" /></>} 
          />
        </Routes>
            
        <Routes>
          <Route path="/OurStory" element={<OurStory />}/>
          <Route path='C-programming' element={<C_Home />} />
        </Routes>
      </div>
    </Router>
  );
}
  
export default App;
