import React, { useState, useRef, useEffect } from 'react';
import './Tile.css';
const Tile = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const str = "tile " + props.className;
  const tile_titleRef = useRef(null);
  let orig = {}
  // when showpopup, I want to set the middle of tile-title at
  // div-width/2... Then set the background color to propagate
  // left and right at the same time, taking a little bit
  // to propagate from the middle position to the edges
  let intervalId;
  useEffect(() => {

    // if showpopup, then the interval will run every 100ms
    if (showPopup) {
      intervalId = setInterval(() => {
        bgC();
      }, 100);
    } else {
      bgCFix()
      clearInterval(intervalId);

    }
    return () => {
      clearInterval(intervalId);
    };
  }, [showPopup]);

  // const propagateBackgroundColor = () => {
  //   const tile_title = tile_titleRef.current;
  //   const { left, width } = tile_title.getBoundingClientRect();
  //   const midpoint = left + width / 2;
  //   const duration = 1000; // in milliseconds
  
  //   let start = null;
  //   const animate = (timestamp) => {
  //     if (!start) start = timestamp;
  //     const progress = timestamp - start;
  //     const fraction = Math.min(progress / duration, 1);
  //     const distance = midpoint - left;
  //     const colorValue = Math.round(fraction * 255);
  //     tile_title.style.background = `linear-gradient(to right, rgba(${colorValue}, 0, 0, 1) ${distance}px, transparent ${distance}px)`;
  
  //     if (progress < duration) {
  //       requestAnimationFrame(animate);
  //     }
  //   };
  //   requestAnimationFrame(animate);
  // };

    // let DOMPos = tile_titleRef.current.getBoundingClientRect();
    // let midpoint = DOMPos.x + DOMPos.width;
    // console.log(tile_titleRef.current.style)
    // tile_titleRef.current.style.backgroundImage = "linear-gradient(to left, blue 50%, transparent 50%)"
    // tile_titleRef.current.style.backgroundPosition="left bottom, right bottom"
    // tile_titleRef.current.style.animation="gradient 1s linear infinite"
    const bgC = () => {
      let DOMPos = tile_titleRef.current.getBoundingClientRect();
      let midpoint = DOMPos.x + (DOMPos.width / 2);
      orig = DOMPos
      tile_titleRef.current.style.backgroundImage = `linear-gradient(to left, blue 50%, transparent 50%, transparent), linear-gradient(to right, blue 50%, transparent 50%, transparent)`;
      tile_titleRef.current.style.backgroundPosition = `${midpoint}px bottom, ${midpoint}px bottom`;
      tile_titleRef.current.style.backgroundSize = '200% 100%';
      tile_titleRef.current.style.animation = 'gradient 1s linear 1';

    
  }
  
    const bgCFix = () => {
      tile_titleRef.current.style={orig}
    }

  return (
    <div 
      className="tile"
      onMouseEnter={() => {
        setShowPopup(true);
      }}
      onMouseLeave={() => setShowPopup(false)}
    >
      
      <div className='tile-title ' ref={tile_titleRef}>{props.title} </div>
      {showPopup && (
        <div className='popup-text-container'>
          <div className='popup-text'>{props.popupText}</div>
          <img className='Image' src="/Transistor.jpg" alt="Transistor"/>
        </div>
      )}
    </div>
  );
};

export default Tile;

/*   .tile .tile-title{
    background-color: rgb(27, 192, 27);
    height: 60px;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
    /* transform: skewX(45deg) translate(0);
    transition: 0.5s; 
  }

  .tile .tile-title::before{
    background-color: rgb(27, 192, 27);
    height: 60px;
  }

  .tile .tile-title::before {
    transform: skewX(45deg) translate(200px);
}

.tile .tile-title:nth-child(1)::before, /*chnage 1
.tile .tile-title:nth-child(1)::after {
    background: #ff1f71;
    box-shadow: 0 0 5px #ff1f71, 0 0 15px #ff1f71, 0 0 30px #ff1f71,
        0 0 60px #ff1f71;
}
  .container .btn a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 30px;
      padding: 10px;
      letter-spacing: 1px;
      text-decoration: none;
      overflow: hidden;
      color: #fff;
      font-weight: 400px;
      z-index: 1;
      transition: 0.5s;
      backdrop-filter: blur(15px);
  }
  .container .btn:hover a {
      letter-spacing: 3px;
  }

  .container .btn a::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
      transform: skewX(45deg) translate(0);
      transition: 0.5s;
      filter: blur(0px);
  }
  .container .btn:hover a::before {
      transform: skewX(45deg) translate(200px);
  }
  .container .btn::before {
      content: "";
      position: absolute;
      left: 50%;
      transform: translatex(-50%);
      bottom: -5px;
      width: 30px;
      height: 10px;
      background: #f00;
      border-radius: 10px;
      transition: 0.5s;
      transition-delay: 0.5;
  }
  .container .btn:hover::before /*lightup button {
      bottom: 0;
      height: 50%;
      width: 80%;
      border-radius: 30px;
  }
  
  .container .btn::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translatex(-50%);
      top: -5px;
      width: 30px;
      height: 10px;
      background: #f00;
      border-radius: 10px;
      transition: 0.5s;
      transition-delay: 0.5;
  }
  .container .btn:hover::after /*lightup button {
      top: 0;
      height: 50%;
      width: 80%;
      border-radius: 30px;
  }
  .container .btn:nth-child(1)::before, /*chnage 1
  .container .btn:nth-child(1)::after {
      background: #ff1f71;
      box-shadow: 0 0 5px #ff1f71, 0 0 15px #ff1f71, 0 0 30px #ff1f71,
          0 0 60px #ff1f71;
  }
  .container .btn:nth-child(2)::before, /* 2
  .container .btn:nth-child(2)::after {
      background: #2db2ff;
      box-shadow: 0 0 5px #2db2ff, 0 0 15px #2db2ff, 0 0 30px #2db2ff,
          0 0 60px #2db2ff;
  }
  .container .btn:nth-child(3)::before, /* 3
  .container .btn:nth-child(3)::after {
      background: #1eff45;
      box-shadow: 0 0 5px #1eff45, 0 0 15px #1eff45, 0 0 30px #1eff45,
          0 0 60px #1eff45;
  }
   */