import React from 'react';
import './DropDownMenu.css';

const DropDownMenu = (props) => {
  // const subItems = [
  //   { id: 1, name: 'Our Story', link: "/ourstory" },
  //   { id: 2, name: 'Team', link: "/ourteam" },
  //   { id: 3, name: 'Locations', link: "/ourlocations" },
  // ];
  const subItems = props.subItems
  return (
    <div className="dropDownMenu">
      {subItems.map((item) => (
        <a key={item.id} href={item.link} className="dropDownItem">
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default DropDownMenu;
