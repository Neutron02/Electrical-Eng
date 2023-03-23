import React, { useState } from 'react';
import DropDownMenu from './DropDownMenu';
import './NavBar.css';

const NavBar = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const navItems = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'About', hasDropDown: true },
    { id: 3, name: 'Services' },
    { id: 4, name: 'Contact' },
  ];

  return (
    <nav className="navBar">
      <ul className="navList">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="navItem"
            onMouseEnter={() => item.hasDropDown && setIsDropDownVisible(true)}
            onMouseLeave={() => item.hasDropDown && setIsDropDownVisible(false)}
          >
            <a href="#" className="navLink">
              {item.name}
            </a>
            {item.hasDropDown && isDropDownVisible && <DropDownMenu />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

