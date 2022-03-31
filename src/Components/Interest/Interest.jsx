import React from "react";
import { BsFlower1, BsScissors, BsFillMapFill } from "react-icons/bs";
import "../Interest/interest.scss";

const Interest = () => {
  return (
    <div className="interest">
      <h3>Centres d'interêt</h3>
      <div className="interest-container">
        <div className="interest-container-left">
      <p>
        <BsFlower1 />
        Jardinage
      </p>
      <p>
        <BsScissors />
        Couture
      </p>
      </div>
      <div className="interest-container-right">
        <BsFillMapFill />
        Voyages :
        <ul>
          <li>- Séjour de 6 jours à San Francisco</li>
          <li>- Séjour de jours à New York</li>
          <li>- Road trip de 12 jours au Portugal </li>
          <li>
            - Divers séjours en Espagne (Barcelone, Bilbao,...)
          </li>
        </ul>
      </div>
      </div>
      
    </div>
  );
};

export default Interest;
