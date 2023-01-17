import React from 'react';
import Tile from './Tile';
import './Pane.css';
const Pane = (props) => {
  return (
    <div id='pane' className='pane'>
      <div className='tiles-container'>
        {props.tilesData.map((tileData, index) => (
          <Tile key={index} title={tileData.title} popupText={tileData.popupText} />
        ))}
      </div>
    </div>
  );
};

export default Pane;
