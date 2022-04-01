import React from "react";
import titre from '../../assets/images/titre.png'
import iut from '../../assets/images/iut.png'

import "../Formations/formation.scss";

const Formations = () => {
  return (
    <div className="formations">
      <h3>Diplômes et formations</h3>
      <div className="formations">
        <img src={titre} alt="logo titre professionnel" width="50px" height="50px" ></img>
        <h4 className="formations-title">
          Titre Professionnel Développeur Web et Web Mobile - Niveau V - en
          cours
        </h4>
        <span className="formations-span">De septembre 2021 à mars 2022 Ecole O'clock Tarbes, France</span>
        <ul className="formations-ul">
          <li>
            - Formation de 6 mois en téléprésentiel - O'Clock est labellisée
            Grande Ecole du Numérique. 700 heures intensives
          </li>
          <li>
            - 3 mois et demi de socle Javascript/Nodejs/PostgresSQL/HTML5/CSS3/
          </li>
          <li>- 1 mois de spécialisation : REACT/SASS</li>
          <li>- 1 mois de projet</li>
        </ul>
      </div>
      <div className="formations">
      <img src={iut} alt="logo iut Paul Sabatier Tarbes" width="100px" height="50px" ></img>

        <h4 className="formations-title">
          Diplôme Universitaire Technique de vente et distributtion
        </h4>
        <span className="formations-span">
          De septembre 2003 à juin 2004 Institut universitaire technologique
          Paul Sabatier
        </span>
      </div>
      <div className="formations">
      <img src={iut} alt="logo iut Paul Sabatier Tarbes" width="100px" height="50px" ></img>

        <h4 className="formations-title">
          DUT Gestion des Entreprises et Administrations option Petite et
          Moyenne Organisation
        </h4>
        <span className="formations-span">
          De septembre 2000 à juin 2002 Institut universitaire technologique
          Paul Sabatier
        </span>
      </div>
    </div>
  );
};

export default Formations;
