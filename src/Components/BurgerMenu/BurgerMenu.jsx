import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./burgerMenu.css";

const toggleMenu = ({ isOpen }) => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    isOpen
      ? menuWrap.setAttribute("aria-hidden", false)
      : menuWrap.setAttribute("aria-hidden", true);
  };

const BurgerMenu = () => {
    

  return (
    <Menu noOverlay onStateChange={toggleMenu}>
        <Link className="menu-item" to="/">A propos de moi</Link>
        <Link className="menu-item" to="/experiences">Experiences</Link>
        <Link className="menu-item" to="/formations">Formations</Link>
        <Link className="menu-item" to="/competences">Compétences</Link>
      {/* <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a> */}
    </Menu>
  );
};

export default BurgerMenu;