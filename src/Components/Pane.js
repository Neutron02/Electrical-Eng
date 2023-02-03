// import React, { useEffect } from 'react';
// import Tile from './Tile';
// import './Pane.css';

// const Pane = (props) => {

//   return (
//     <div id='pane' className='pane'>
//        <div className='tiles-container-wrap' onWheel={e => onWheelSlider(e, sliderRef)}> 
//             <div className='tiles-container'>
//                 {props.tilesData.map((tileData, index) => (
//                 <Tile key={index} title={tileData.title} popupText={tileData.popupText} />
//                 ))}
//             </div>
//         </div>
//     </div>
//   );

// };

// export default Pane;

// import React, { useState, useEffect, useRef } from 'react';
// import Tile from './Tile';
// import './Pane.css';

// const Pane = (props) => {
//   const sliderRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const tilesContainer = sliderRef.current;
//     tilesContainer.style.width = `${props.tilesData.length * 200}px`;
//     tilesContainer.addEventListener("wheel", handleWheel);
//     return () => {
//       tilesContainer.removeEventListener("wheel", handleWheel);
//     };
//   }, [props.tilesData, currentIndex]);


//   const handleNext = () => {
//     if (currentIndex + 5 < props.tilesData.length) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const handleWheel = (e) => {
//     e.preventDefault();
//     if (e.deltaX > 0) {
//       handleNext();
//     } else if (e.deltaX < 0) {
//       handlePrev();
//     }
//   };
//     // const handleWheel = (e) => {
//     //     e.preventDefault();
//     //     (e.deltaY > 0) ? handleNext() : (e.deltaY < 0) ? handlePrev() : null;
//     // };

//   return (
    // <div id='pane' className='pane'>
    //   <div className='tiles-container-wrap' ref={sliderRef}>
    //     <div className='tiles-container' style={{ transform: `translateX(-${currentIndex * 150}px)` }}>
    //       {props.tilesData.map((tileData, index) => (
    //         <Tile key={index} title={tileData.title} popupText={tileData.popupText} />
    //         ))}
    //         </div>
    //       </div>
    //       <button className='button' onClick={handlePrev}>Previous</button>
    //       <button className='button' onClick={handleNext}>Next</button>
    //     </div>
//   );
// };
// export default Pane;

import React, { useState, useEffect, useRef } from 'react';
import Tile from './Tile';
import './Pane.css';

const Pane = (props) => {
    const arrayOfTile = props.tilesData;
    const [renderedTiles, setRenderedTiles] = useState(arrayOfTile.slice(0, 5));
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const tilesContainer = sliderRef.current;
        // tilesContainer.style.width = `${props.tilesData.length * 200}px`;
        tilesContainer.addEventListener("wheel", handleWheel);
        return () => {
            tilesContainer.removeEventListener("wheel", handleWheel);
        };
    }, [currentIndex]);

    const handleNext = () => {
        if(currentIndex < arrayOfTile.length - 5){
            setCurrentIndex(currentIndex + 1);
            handleRender(currentIndex);
        } else {
            //cycle back to beginning
            setCurrentIndex(0);
            handleRender(0);
        }

    };

    const handlePrev = () => {
        // setCurrentIndex(currentIndex - 1);
        // handleRender(currentIndex);

        if(currentIndex > 0){
            setCurrentIndex(currentIndex - 1);
            handleRender(currentIndex);
        }
        else {
            // cycle back to the end
            setCurrentIndex(arrayOfTile.length - 5);
            handleRender(currentIndex);
        }
    };

    const handleWheel = (e) => {
        e.preventDefault();
        if (e.deltaX > 0) {
            handleNext();
        } else if (e.deltaX < 0) {
            handlePrev();
        }
    }

    const handleRender = (currentIndex) => {
        //add the currentIndex to the slice
        if( currentIndex < arrayOfTile.length - 5){
            setRenderedTiles(arrayOfTile.slice(currentIndex, currentIndex + 5));
        } else{
            setRenderedTiles(arrayOfTile.slice(currentIndex));
        }
    }

    return(
        <div id='pane' className='pane'>
            <div className='tiles-container-wrap' ref={sliderRef}>
                {renderedTiles.map((tileData, index) => (
                    <Tile key={index} title={tileData.title} popupText={tileData.popupText} />
                ))}
            </div>

            
        </div>
    )
}

export default Pane;