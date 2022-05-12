import React from "react";
import "../header/Header.css";
import eco from "../../assets/images/eco.svg";

const Header = () => {
  return (
    <div className="Header">
        <div className="container-header">
          <img src={eco} alt={eco} />
        <button className="button-contact">Contactez-nous ! </button>
      </div>
    </div>
  )
}


export default Header;