import React from 'react';
import './DropDownMenu.css';

const DropDownMenu = () => {
  const subItems = [
    { id: 1, name: 'Our Story' },
    { id: 2, name: 'Team' },
    { id: 3, name: 'Locations' },
  ];

  return (
    <div className="dropDownMenu">
      {subItems.map((item) => (
        <a key={item.id} href="#" className="dropDownItem">
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default DropDownMenu;
