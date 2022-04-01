import React from "react";
import loxam from "../../assets/images/loxam.png";
import oclock from "../../assets/images/oclock.png";

import "../Experiences/experience.scss";

const Experiences = () => {
  return (
    <div className="experience">
      <h3>Expérience</h3>
      <div className="experience">
        <img src={oclock} alt="logo o'clock " width="60px" height="40px"></img>
        <h4 className="experience-title">Developpeur web</h4>
        <span className="experience-span">
          De février 2022 à mars 2022 O'Clock télé présentiel,
        </span>
        <p>Projet de fin d'études :</p>
        <ul className="experience-list">
          <li>- Application de partage de balades moto</li>
          <li>- Réalisé en mode agile découpé en 4 sprints</li>
          <li>- 5 développeurs 3 back et 2 front</li>
          <li>
            - <a href="https://www.youtube.com/watch?v=0TCe_tGBYFs">RandoMoto</a>{" "}
          </li>
        </ul>
      </div>
      <div className="experience">
      <img src={oclock} alt="logo o'clock " width="60px" height="40px"></img>
      <h4 className="experience-title">Developpeur Fullstack JS</h4>
      <span className="experience-span">
        De sept. 2021 - mars 2022 7mois O'Clock télé présentiel,
      </span>
      <p>
        Réalisation de divers projets de formation, back et front.</p>
        <p> HTML, CSS,
        JAVASCRIPT, NODEJS, POSTGRESQL, API, REACT
      </p>
      </div>
      <div className="experience">
        <img src={loxam} alt="logo loxam " width="30px" height="30px"></img>
        <h4 className="experience-title">Responsable de location</h4>
        <span className="experience-span">
          Depuis septembre 2006 Loxam Pau, France,
        </span>
        <ul className="experience-list">
          <li>
            - Participation à l'amélioration d'une application interne (test,
            remonter des bugs, point d'amélioration)
          </li>
          <li>
            - Gestion du centre de profit lors des absences du responsable
            d'agence
          </li>
          <li>- Interlocuteur privilégié des clients</li>
          <li>
            - Prise charge l'organisation de l'activité et la réception des
            appels au comptoir
          </li>
          <li>
            - Gestion des contrats (devis, contrats, factures, suivis des
            litiges, refacturation et suivi des casses
          </li>
          <li>- Gestion du magasin (stocks, inventaire,....)</li>
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
