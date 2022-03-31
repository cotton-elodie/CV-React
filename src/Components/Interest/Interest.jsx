import React from "react";
import { BsFlower1, BsScissors, BsFillMapFill } from "react-icons/bs";
import "../Interest/interest.scss";

const Interest = () => {
  return (
    <div>
      <h3>Centres d'interêt</h3>
      <p>
        <BsFlower1 />
        Jardinage
      </p>
      <p>
        <BsScissors />
        Couture
      </p>
      <div>
        <BsFillMapFill />
        Voyages :
        <ul>
          <li>- Séjour de 6 jours à San Francisco</li>
          <li>- Séjour de jours à New York</li>
          <li>- Road trip de 12 jours au Portugal </li>
          <li>
            - Divers séjours en Espagne (Barcelone, Bilbao, Sarragosse, Saint
            Jacques de Copostelle,...)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Interest;
