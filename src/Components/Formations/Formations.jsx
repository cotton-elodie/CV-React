import React from "react";
import '../Formations/formation.scss'

const Formations = () => {
  return (
    <div className="formations">
      <h3>Diplômes et formations</h3>
      <div className="formations-tp">
        <h4>
          Titre Professionnel Développeur Web et Web Mobile - Niveau V - en
          cours
        </h4>
        <span>De septembre 2021 à mars 2022 Ecole O'clock Tarbes, France</span>
        <ul>
          <li>
            Formation de 6 mois en téléprésentiel - O'Clock est labellisée
            Grande Ecole du Numérique. 700 heures intensives
          </li>
          <li>
            {" "}
            3 mois et demi de socle Javascript/Nodejs/PostgresSQL/HTML5/CSS3/
          </li>
          <li>1 mois de spécialisation : REACT/SASS</li>
          <li>1 mois de projet</li>
        </ul>
      </div>
      <div className="formation-dut">
        <h4>
          DUT Gestion des Entreprises et Administrations option Petite et
          Moyenne Organisation
        </h4>
        <span>
          De septembre 2000 à juin 2002 Institut universitaire technologique
          Paul Sabatier
        </span>
      </div>
    </div>
  );
};

export default Formations;
