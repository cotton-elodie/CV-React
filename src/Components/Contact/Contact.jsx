import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <form className="contact-form">
        <label>
          Votre nom :
          <input type="text" placeholder="Votre nom" />
        </label>
        <label>
          Votre prénom :
          <input type="text" placeholder="Votre prénom" />
        </label>
        <label>
          Votre mail :
          <input type="mail" placeholder="Votre adresse mail" />
        </label>
        <label>
          Votre entreprise :
          <input type="text" placeholder="Entreprise" />
        </label>
        <button>Valider</button>
      </form>
    </div>
  );
};

export default Contact;
