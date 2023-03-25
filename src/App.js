import './App.css';
import TitlePage from './Components/StartupPage/TitlePage';
import Pane from './Components/StartupPage/Pane';
import Carousel from './Components/StartupPage/Carousel';
import NavBar from './Components/NavBarComp/NavBar';
import FeaturedSection from './Components/StartupPage/FeaturedSection';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom"; // <-- replace with default import syntax

import OurStory from "../src/Components/About/OurStory";
const tileData = [
  {id: "transistor", title: 'Transistor', popupText: 'What is a transistor?+ \nA transistor is a semiconductor device often made up of n-type and p-type materials. It is used to amplify or switch electronic signals and electrical power. It is composed of three terminals: the emitter, the base, and the collector. '},
  {id: "resistor", title: 'Resistor', popupText: "A resistor is a device made up of an insulating material. It's main purpose is to resistor current (to lower the change in charge over time)."},
  {id: "capacitor", title: 'Capacitor', popupText: 'A capacitor is a 2 point device where two conductive materials are placed a distance D away from each other, creating an open circuit in steady state DC conditions. The capacitance of the device is defined as the ratio of the charge on the plates to the voltage between them. The capacitance is a function of the distance between the plates, the area of the plates, and the permittivity of the material between the plates.'},
  {id: "inductor", title: 'Inductor', popupText: 'An inductor is a device that stores energy in a magnetic field. The voltage across inductors is proportional to the rate of change of current through the inductor. The inductance of the device is defined as the ratio of the voltage across the inductor to the rate of change of current through the inductor. The inductance is a function of the number of turns of wire in the inductor, the area of the wire, and the permeability of the material the wire is made of.'},
  // {title: 'Tile 5', popupText: 'Popup text for tile 5'},
  // {title: 'Tile 6', popupText: 'Popup text for tile 6'},
  // {title: 'Tile 7', popupText: 'Popup text for tile 7'},
  // {title: 'Tile 8', popupText: 'Popup text for tile 8'},
];

for(let i = 0; i < 15; i++) {
  tileData.push({id: `${i + 4}`, title: `Tile ${i}`, popupText: `Popup text for tile ${i}`});

}


function App() { 
  return (
    // default div is display: block
    <div className="App">
      <NavBar />
      {/* titlepage's display is "flex", and position is "sticky" */}
      <TitlePage /> 
      {/* selections is  */}
      <div id="selections">
        {/* this will be removed probably <Pane tilesData={tileData} />
         */}
         {/* carousel is display flex */}
         <Carousel tilesData={tileData}/>
      </div>
      <FeaturedSection title="Transistor" paragraph="Transistor text" id="tile-transistor-section"/>
      <FeaturedSection title="Resistor" id="tile-resistor-section"/>
      <FeaturedSection title="Capacitor" id="tile-capacitor-section"/>
      <FeaturedSection title="Inductor" id="tile-inductor-section"/>
      {/* <Switch>
         <Route path="/ourstory" component={OurStory} />
      </Switch> */} FUcked up
    </div>
  );
}

export default App;
