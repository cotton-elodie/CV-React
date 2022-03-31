import React from "react";
import agile from "../../assets/images/agile.png";
import css from "../../assets/images/css.png";
import git from "../../assets/images/git.png";
import github from "../../assets/images/github.png";
import HTML from "../../assets/images/HTML5.png";
import javascript from "../../assets/images/js.png";
import nodejs from "../../assets/images/nodejs.png";
import postgresql from "../../assets/images/postgres.png";
import react from "../../assets/images/react.svg";
import salesforce from "../../assets/images/salesforce.png";
import "../Skill/skill.scss";

const Skill = () => {
  return (
    <div className="skill">
      <h3>Compétences</h3>
      <div className="skill-container-top">
        <img
          width="50px"
          height="50px"
          className="skill-container-top-img"
          src={HTML}
          alt="logo Html"
        />
        <img
          width="40px"
          height="50px"
          className="skill-container-top-img"
          src={css}
          alt="logo CSS"
        />
        <img
          className="skill-container-top-img"
          width="50px"
          height="50px"
          src={javascript}
          alt="logo javascript"
        />
        <img
          className="skill-container-top-img"
          width="70px"
          height="50px"
          src={nodejs}
          alt="logo nodejs"
        />
        <img
          className="skill-container-top-img"
          width="50px"
          height="50px"
          src={postgresql}
          alt="logo postgresSQL"
        />
        <img
          className="skill-container-top-img"
          width="50px"
          height="50px"
          src={react}
          alt="logo react"
        />
        <img
          className="skill-container-top-img"
          width="50px"
          height="50px"
          src={git}
          alt="logo git"
        />
        <img
          className="skill-container-top-img"
          width="80px"
          height="50px"
          src={github}
          alt="logo github"
        />
        
        <img
          className="skill-container-img"
          width="80px"
          height="50px"
          src={salesforce}
          alt="logo salesforce"
        />
        <img
          className="skill-container-img"
          width="50px"
          height="50px"
          src={agile}
          alt="logo agile"
        />
      </div>
      <div className="skill-container-botton">
        <ul className="skill-container-botton-ul">
          <span> Soft skills</span>
          <li className="skill-container-botton-soft" >#écoute</li>
          <li className="skill-container-botton-soft">#organisé</li>
          <li className="skill-container-botton-soft">#équipe</li>
          <li className="skill-container-botton-soft">#humilité</li>
          <li className="skill-container-botton-soft">#changement</li>
        </ul>
      </div>
    </div>
  );
};

export default Skill;
