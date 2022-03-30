import React from "react";
import agile from "../../assets/images/agile.png";
import css from "../../assets/images/css.png";
import git from "../../assets/images/git.png";
import github from "../../assets/images/github.png";
import HTML from "../../assets/images/HTML5.png";
import javascript from '../../assets/images/js.png';
import nodejs from "../../assets/images/nodejs.png";
import postgresql from "../../assets/images/postgres.png";
import react from "../../assets/images/react.svg";
import rentalman from "../../assets/images/rentalman.png";
import salesforce from "../../assets/images/salesforce.png";
import '../Skill/skill.scss'

const Skill = () => {
  return (
    <div className="skill">
      <h3>Compétences</h3>
      <div className="skill-img">
        <img width="50px" height="50px" className="skill-img" src={HTML} alt='logo Html' />
        <img width="40px" height="50px" className="skill-img" src={css} alt='logo CSS' />
      </div>
      <div>
        <img width="50px" height="50px" src={javascript} alt='logo javascript'/>
      </div>
      <div>
        <img width="50px" height="50px" src={nodejs} alt='logo nodejs' />
        <img width="50px" height="50px" src={postgresql} alt='logo postgresSQL' />
      </div>
      <div>
        <img width="50px" height="50px" src={react} alt='logo react' />
      </div>
      <div>
        <img width="50px" height="50px" src={git} alt='logo git' />
        <img width="50px" height="50px" src={github} alt='logo github' />
      </div>
      <div>
        <img width="50px" height="50px" src={rentalman} alt='logo rentalman' />
        <img width="50px" height="50px" src={salesforce} alt='logo salesforce' />
      </div>
      <div>
        <img width="50px" height="50px" src={agile} alt='logo agile' />
      </div>

      <ul>
        <li>#écoute</li>
        <li>#organisé</li>
        <li>#équipe</li>
        <li>#humilité</li>
        <li>#changement</li>
      </ul>
    </div>
  );
};

export default Skill;
