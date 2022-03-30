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
             <BsHouseDoor /> <span>42 ter route du Pic du Midi 65310 Horgues</span>
           </li>
           <li>
             <BsEnvelope />
             <span>elodie.cotton@hotmail.com</span>
           </li>
           <li>
             <BsFillTelephoneFill />
             <span>+33.6.07.41.38.58</span>
           </li>
              <li>
               <a href="https://www.linkedin.com/in/e-cotton/">
                 <BsLinkedin />
                 www.linkedin.com/in/e-cotton
               </a>
             </li>
             <li>
               <a href="https://github.com/cotton-elodie">
                 <BsGithub />
                 https://github.com/cotton-elodie
               </a>
             </li>
         </ul>
        </div>
      </div>
    </div>

    // <div className="presentation">
    //   <div className="presentation-name">
    //     <h2>Elodie Cotton</h2>
    //     <p>Développeuse Fullstack</p>
    //   </div>

    //   <div className="presentation-contact">
    //     <ul>
    //       <li>
    //         <BsHouseDoor /> 42 ter route du Pic du Midi 65310 Horgues
    //       </li>
    //       <li>
    //         <BsEnvelope />
    //         elodie.cotton@hotmail.com
    //       </li>
    //       <li>
    //         <BsFillTelephoneFill />
    //         06 07 41 38 58
    //       </li>
    //     </ul>

    //       <ul>
    //         <li>
    //           <a href="https://www.linkedin.com/in/e-cotton/">
    //             <BsLinkedin />
    //             www.linkedin.com/in/e-cotton
    //           </a>
    //         </li>
    //         <li>
    //           {" "}
    //           <a href="https://github.com/cotton-elodie">
    //             <BsGithub />
    //             https://github.com/cotton-elodie
    //           </a>
    //         </li>
    //       </ul>

    //     <img className="presentation-img" src={elodie} alt={elodie} />
    //     <p className="presention-pres">
    //       Après 15 ans passé en tant que responsable de location de matériels de
    //       chantier, j'ai décidé de me reconvertir vers le métier de développeur
    //       fullstack spécialisation React.
    //     </p>
    //   </div>
    // </div>
  );
};

export default Presentation;
