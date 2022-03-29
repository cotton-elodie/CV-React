import React from "react";
import { Link } from "react-router-dom";
import elodie from '../../assets/images/elodie.jpg';

const Header = () => {
  return (
    <div>
      <h2>Elodie Cotton</h2>
      <img src={elodie} alt={elodie} />
      <p>
        Après 15 ans passé en tant que responsable de location de matériels de
        chantier, j'ai décidé de me reconvertir vers le métier de développeur
        fullstack spécialisation React.
      </p>
      <div>
        <Link to="/experiences">Experiences</Link>
        <Link to="/formations">Formations</Link>
        <Link to="/competences">Compétences</Link>
        <Link to="projet">Projet</Link>
      </div>
    </div>
  );
};

export default Header;
