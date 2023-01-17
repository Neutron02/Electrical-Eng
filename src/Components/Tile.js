import React, { useState } from 'react';
import './Tile.css';
const Tile = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div
      className='tile'
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      <div className='tile-title'>{props.title}</div>
      {showPopup && (
        <div className='popup-text-container'>
          <div className='popup-text'>{props.popupText}</div>
        </div>
      )}
    </div>
  );
};

export default Tile;