import React from "react";
import elodie from "../../assets/images/elodie.jpg";
import {
  BsHouseDoor,
  BsEnvelope,
  BsLinkedin,
  BsGithub,
  BsFillTelephoneFill,
} from "react-icons/bs";

import "../Presentation/presentation.scss";

const Presentation = () => {
  return (
    <div className="presentation">
      <div className="presentation-top">
        <div className="presentation-top-container">
          <p className="presentation-top-name">Elodie Cotton</p>
          <p className="presentation-top-function">Développeuse Fullstack</p>
        </div>
      </div>
      <div className="presentation-bottom">
        <div className="presentation-bottom-text">
          <p>
            Après 15 ans passé en tant que responsable de location de matériels
            de chantier, j'ai décidé de me reconvertir vers le métier de
            développeur fullstack spécialisation React.
          </p>
        </div>
        <div className="presentation-bottom-image">
          <img className="presentation-img" src={elodie} alt={elodie} />
        </div>
        <div className="presentation-bottom-links">
          <ul>
            <li>
              <BsHouseDoor />{" "}
              <span>42 ter route du Pic du Midi 65310 Horgues</span>
            </li>
            <div className="presentation-bottom-links-border"> </div>
            <li>
              <BsEnvelope />
              <span>elodie.cotton@hotmail.com</span>
            </li>
            <div className="presentation-bottom-links-border"> </div>

            <li>
              <BsFillTelephoneFill />
              <span>+33.6.07.41.38.58</span>
            </li>
            <div className="presentation-bottom-links-border"> </div>

            <li>
              <a href="https://www.linkedin.com/in/e-cotton/">
                <BsLinkedin />
                www.linkedin.com/in/e-cotton
              </a>
            </li>
            <div className="presentation-bottom-links-border"> </div>

            <li>
              <a href="https://github.com/cotton-elodie">
                <BsGithub />
                https://github.com/cotton-elodie
              </a>
            </li>
            <div className="presentation-bottom-links-border"> </div>
          </ul>
        </div>
      </div>
    </div>

    
  );
};

export default Presentation;
