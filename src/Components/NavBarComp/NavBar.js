import React, { useState } from 'react';
import DropDownMenu from './DropDownMenu';
import './NavBar.css';

const NavBar = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const aboutSubItems = [
    { id: 1, name: 'Our Story', link: "/ourstory" },
    { id: 2, name: 'Team', link: "/ourteam" },
    { id: 3, name: 'Locations', link: "/ourlocations" },
  ];
  const TopicsSubItems = [
    { id: 1, name: 'DC Circuits', link: "/DC-Circuits" },
    { id: 2, name: 'C Programming', link: "/C-programming" },

  ]
  const navItems = [
    { id: 1, name: 'Home', link: "/" },
    { id: 2, name: 'About', link: "/about" , hasDropDown: true, subItems: aboutSubItems},
    { id: 3, name: 'Topics', hasDropDown: true, subItems: TopicsSubItems}, // just want a popup dropdown, don't really want anything else
    { id: 4, name: 'Contact', link: "/contact" },
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
            <a href={item.link} className="navLink">
              {item.name}
            </a>
            {item.hasDropDown && isDropDownVisible && <DropDownMenu subItems={item.subItems}/>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

