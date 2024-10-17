import React, { useState } from "react";
import './styles/Header.scss';
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  
  return (
    <header className="header">
      <div className="header_logo">
        <h1>Svayam's Portfolio</h1>
      </div>

      <nav className={active ? "nav_active" : ""}> 
        <ul>
          <li className="close_icon">
            <CloseIcon onClick={showMenu} />
          </li>
          {["Home", "About", "Portfolio", "Blog", "Contact"].map((item) => (
            <li key={item}>
              <Link to="/"><b>{item}</b></Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="menu_icon">
        <MenuIcon onClick={showMenu} />
      </div>
    </header>
  );
};

export default Header;