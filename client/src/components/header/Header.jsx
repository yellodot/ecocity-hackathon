import React from "react";
import "../header/Header.css";
import eco from "../../assets/images/eco.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
        <div className="container-header">
          <Link to ="/Home">
          <img src={eco} alt={eco} />
          </Link>
          <Link to ="/Contact">
        <button className="button-contact">Contactez-nous ! </button>
        </Link>
      </div>
    </div>
  )
}

export default Header;