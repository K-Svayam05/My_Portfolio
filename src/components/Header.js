import React, { useState} from "react";
import './styles/Header.scss';

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const Header = () => {
  const[active,setActive] = useState(false);
  const showMenu = ()=> {
    setActive(!active)
  };
  
  return (
    <div className="header">
      <div className="header_logo">
        <h1>Svayam's Portfolio</h1>
      </div>

      <nav> 
        <ul>
          <div className="closed">
            <CloseIcon className="close-icon" onclick={showMenu}  />
          </div>
          <li>
            <Link to="/"><b>Home</b></Link>
          </li>
          <li>
            <Link to="/"><b>About</b></Link>
          </li>
          <li>
            <Link to="/"><b>Portfolio</b></Link>
          </li>
          <li>
            <Link to="/"><b>Blog</b></Link>
          </li>
          <li>
            <Link to="/"><b>Contact</b></Link>
          </li>
          
        </ul>
      </nav>
      <div className="changer">
        <MenuIcon className="menu" onclick={showMenu}/>


      </div>
    </div>
  );
};

export default Header;
