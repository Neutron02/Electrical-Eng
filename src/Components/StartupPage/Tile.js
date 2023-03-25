import React, { useState } from 'react';
import './Tile.css';

const Tile = (props) => {
  const [showPopup, setShowPopup] = useState(false);
let str = "";

  const handleTileClick = () => {
    const section = document.getElementById(`tile-${props.id}-section`);
    console.log("WE found a section, " + section)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="tile"
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
      onClick={handleTileClick}
      id={props.id}
    >
      <div className="tile-content">
        <div className="tile-title">{props.title}</div>
        {showPopup && (
          <div className="popup-text-container">
            <div className="popup-text">{props.popupText}</div>
            <img className="popup-image" src="/Transistor.jpg" alt="Transistor" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tile;
