import react from "react"
import "./C_LeftHandNav.css"

const navItems = [
    { id: 1, name: "How to start C on MAC OS (Easier)", link: "/C-programming/startup-mac"},
    { id: 2, name: "How to start on Windows (Kinda harder)", link: "/C-programming/startup-windows"},
    { id: 3, name: "How to start on Linux (Kinda harder)", link: "/C-programming/startup-windows"}


]
// pretty much copy and pasted from ../NavBarComp/DropDownMenu.js
const C_LeftHandNav = () => {
    return (
        <nav className="C-navBar">
          <ul className="C-navList">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="C-navItem"
              >
                <a href={item.link} className="C-navLink">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      );
}

export default C_LeftHandNav;