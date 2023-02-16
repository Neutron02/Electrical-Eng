import React from "react";
import Tile from "./Tile";
import { useState } from "react";
import './Carousel.css';
const Carousel = (props) => {
    const [range, setRange] = useState({0:4});
    const [TileData, setTileData] = useState(props.tilesData.slice(0).map((tile, index) => {
        return <Tile key={index} title={tile.title} popupText={tile.popupText} />
    }));
    const [currentRenderedTiles, setCurrentRenderedTiles] = useState(TileData);

    const handleScroll = (e) => {
        console.log(e);
        if(e.deltaX){
            console.log("Scrolling horizontally");
        }
    };

    return(
            <div className="carousel__container" onScroll={handleScroll}>
                {console.log(`props.tilesData: ${props.tilesData}`)}
                {console.log(`CurrentRenderedTiles: ${currentRenderedTiles}`)}
                {console.log(`TileData: ${TileData}`)}
                {TileData}
            </div>
    );
};

export default Carousel;
