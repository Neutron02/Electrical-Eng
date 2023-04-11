import React, { useState } from 'react';
import Tile from './Tile';
import './Carousel.css';

const Carousel = (props) => {
//   const TileData = props.tilesData.map((tile, index) => (
//     <Tile key={index} index={index}title={tile.title} popupText={tile.popupText} />
//   ));
const [TileData, setTileData] = useState(props.tilesData.slice(0).map((tile, index) => {
    return <Tile key={index} id={tile.id} title={tile.title} popupText={tile.popupText} />;
  }));

  return (
    <div className="carousel__container">
      <div className="carousel__content">{TileData}</div>
    </div>
  );
};

export default Carousel;

