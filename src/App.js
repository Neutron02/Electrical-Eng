import './App.css';
import TitlePage from './Components/TitlePage';
import Pane from './Components/Pane';
import Carousel from './Components/Carousel';

const tileData = [
  // {title: 'Tile 1', popupText: 'Popup text for tile 1'},
  // {title: 'Tile 2', popupText: 'Popup text for tile 2'},
  // {title: 'Tile 3', popupText: 'Popup text for tile 3'},
  // {title: 'Tile 4', popupText: 'Popup text for tile 4'},
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
