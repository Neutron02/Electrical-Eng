import React from 'react';
import Tile from './Tile';
import './Carousel.css';

const Carousel = (props) => {
  const TileData = props.tilesData.map((tile, index) => (
    <Tile key={index} title={tile.title} popupText={tile.popupText} />
  ));

  return (
    <div className="carousel__container">
      <div className="carousel__content">{TileData}</div>
    </div>
  );
};

export default Carousel;

