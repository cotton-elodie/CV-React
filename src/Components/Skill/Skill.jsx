import React from "react";
import agile from "../../assets/images/agile.png";
import css from "../../assets/images/css.png";
import git from "../../assets/images/git.png";
import github from "../../assets/images/github.png";
import HTML from "../../assets/images/HTML5.png";
import javascript from '../../assets/images/js.png';
import nodejs from "../../assets/images/nodejs.png";
import postgresql from "../../assets/images/postgres.png";
import react from "../../assets/images/react.png";
import rentalman from "../../assets/images/rentalman.png";
import salesforce from "../../assets/images/salesforce.png";

const Skill = () => {
  return (
    <div className="skill">
      <h3>Compétences</h3>
      <div className="skill-img">
        <img width="50px" height="50px" className="skill-img" src={HTML} />
        <img width="40px" height="50px" className="skill-img" src={css} />
      </div>
      <div>
        <img width="50px" height="50px" src={javascript} />
      </div>
      <div>
        <img width="50px" height="50px" src={nodejs} />
        <img width="50px" height="50px" src={postgresql} />
      </div>
      <div>
        <img width="50px" height="50px" src={react} />
      </div>
      <div>
        <img width="50px" height="50px" src={git} />
        <img width="50px" height="50px" src={github} />
      </div>
      <div>
        <img width="50px" height="50px" src={rentalman} />
        <img width="50px" height="50px" src={salesforce} />
      </div>
      <div>
        <img width="50px" height="50px" src={agile} />
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
