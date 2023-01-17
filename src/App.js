import './App.css';
import SelectionPage from './Components/SelectionPage'
import TitlePage from './Components/TitlePage';
import Tile from './Components/Tile';
import Pane from './Components/Pane';

const tileData = [
  {title: 'Tile 1', popupText: 'Popup text for tile 1'},
  {title: 'Tile 2', popupText: 'Popup text for tile 2'},
  {title: 'Tile 3', popupText: 'Popup text for tile 3'},
  {title: 'Tile 4', popupText: 'Popup text for tile 4'},
  {title: 'Tile 5', popupText: 'Popup text for tile 5'},
  
];

function App() {
  return (
    <div className="App">
      <TitlePage />
      <div id="selctions">
        <Pane tilesData={tileData} />
      </div>
    </div>
  );
}

export default App;
