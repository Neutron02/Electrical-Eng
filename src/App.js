import './App.css';
import TitlePage from './Components/TitlePage';
import Pane from './Components/Pane';
import Carousel from './Components/Carousel';

const tileData = [
  {title: 'Transistor', popupText: 'What is a transistor?+ \nA transistor is a semiconductor device often made up of n-type and p-type materials. It is used to amplify or switch electronic signals and electrical power. It is composed of three terminals: the emitter, the base, and the collector. '},
  {title: 'Resistor', popupText: "A resistor is a device made up of an insulating material. It's main purpose is to resistor current (to lower the change in charge over time)."},
  {title: 'Capacitor', popupText: 'A capacitor is a 2 point device where two conductive materials are placed a distance D away from each other, creating an open circuit in steady state DC conditions. The capacitance of the device is defined as the ratio of the charge on the plates to the voltage between them. The capacitance is a function of the distance between the plates, the area of the plates, and the permittivity of the material between the plates.'},
  {title: 'Inductor', popupText: 'An inductor is a device that stores energy in a magnetic field. The voltage across inductors is proportional to the rate of change of current through the inductor. The inductance of the device is defined as the ratio of the voltage across the inductor to the rate of change of current through the inductor. The inductance is a function of the number of turns of wire in the inductor, the area of the wire, and the permeability of the material the wire is made of.'},
  // {title: 'Tile 5', popupText: 'Popup text for tile 5'},
  // {title: 'Tile 6', popupText: 'Popup text for tile 6'},
  // {title: 'Tile 7', popupText: 'Popup text for tile 7'},
  // {title: 'Tile 8', popupText: 'Popup text for tile 8'},
];

for(let i = 0; i < 15; i++) {
  tileData.push({title: `Tile ${i}`, popupText: `Popup text for tile ${i}`});

}


function App() { 
  return (
    <div className="App">
      <TitlePage />
      <div id="selections">
        {/* <Pane tilesData={tileData} />
         */}
         <Carousel tilesData={tileData}/>
      </div>
    </div>
  );
}

export default App;
