import react from "react"
import "./C_LeftHandNav.css"

const navItems = [
    { id: 1, name: "How to start C Programming on MAC OS", link: "/C-programming/startup-mac"}
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
                <a href={item.link} className="navLink">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      );
}

export default C_LeftHandNav;