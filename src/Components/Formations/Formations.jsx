import React from "react";
import "../Formations/formation.scss";

const Formations = () => {
  return (
    <div className="formations">
      <h3>Diplômes et formations</h3>
      <div className="formations-container-top">
        <h4 className="formations-container-title">
          Titre Professionnel Développeur Web et Web Mobile - Niveau V - en
          cours
        </h4>
        <span className="formations-container-span">De septembre 2021 à mars 2022 Ecole O'clock Tarbes, France</span>
        <ul className="formations-container-ul">
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
      <div className="formation-container-bottom">
        <h4 className="formation-container-title">
          DUT Gestion des Entreprises et Administrations option Petite et
          Moyenne Organisation
        </h4>
        <span className="formation-container-title-span">
          De septembre 2000 à juin 2002 Institut universitaire technologique
          Paul Sabatier
        </span>
      </div>
    </div>
  );
};

export default Formations;
