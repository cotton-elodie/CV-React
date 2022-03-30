import React from "react";
import { slide as Menu } from "react-burger-menu";
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
      {/* <Link className="menu-item" to="/">A propos de moi</Link>
        <Link className="menu-item" to="/experiences">Experiences</Link>
        <Link className="menu-item" to="/formations">Formations</Link>
        <Link className="menu-item" to="/competences">Compétences</Link> */}
      <a className="menu-item" href="/">
        A propos de moi
      </a>
      <a className="menu-item" href="/experiences">
        Experiences
      </a>
      <a className="menu-item" href="/formations">
        Formations
      </a>
      <a className="menu-item" href="/competences">
        Compétences
      </a>
    </Menu>
  );
};

export default BurgerMenu;
