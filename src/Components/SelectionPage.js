import './SelectionPage.css'
import React from 'react';
import { ReactDOM } from 'react';
const SelectionPage = () => {
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const [height, setHeight] = React.useState(0);

  const handleClick1 = (event) => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
    setHeight(30);
  };

  const handleClick2 = (event) => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
    setIsOpen3(false);
    setHeight(30);
  };

  const handleClick3 = (event) => {
    setIsOpen3(!isOpen3);
    setIsOpen1(false);
    setIsOpen2(false);
    setHeight(30);
  };

  return (
    <div id = "background">
      <div id="selections">
        <button
          className="custom-btn btn-12"
          onClick={handleClick1}
        >
          <span>Click</span><span>Button 1</span>
        </button>

        <button
          className="custom-btn btn-12"
          onClick={handleClick2}
        >
          <span>Click</span><span>Button 2</span>
        </button>
        <button
          className="custom-btn btn-12"
          onClick={handleClick3}
        >
          <span>Click</span><span>Button 3</span>
        </button>
      </div>
    {isOpen1 || isOpen2 || isOpen3 ? <div id="information-section">
        {
            isOpen1 ? <div id="btn-1-text" style={{height: height + "vh"}}>IsOpen1 is true</div>
            : null
        }
        {
            isOpen2 ? <div id="btn-2-text" style={{height: height + "vh"}}>IsOpen2 is true</div>
            : null
        }
        {
            isOpen3 ? <div id="btn-3-text" style={{height: height + "vh"}}>IsOpen3 is True </div>
            :null
        }</div>
    : null}
    </div>
  );
};

export default SelectionPage;
