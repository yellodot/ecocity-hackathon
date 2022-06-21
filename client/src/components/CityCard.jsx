import React from "react";
import ".//CityCard.css";
import { Link } from "react-router-dom";

const CityCard = ({ id, nom, score, dechets, espace, qualite }) => {
  return (
    <div className="cityCardContainer">
      <div className="leftContainer">
        <h1 className="h1-card name">{nom}</h1>
        <p className="cityP">
          {" "}
          classLorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          tempora dicta, possimus saepe ullam facilis quasi recusandae sapiente
          expedita quae!
        </p>
        <div className="linkCard">
          <div className="linkDetail">
            <Link to={`/${id}`} className="link">
              Découvrir la ville
            </Link>
          </div>
          <a href="https://www.seloger.com/">Trouver un logement</a>
        </div>
      </div>
      <div className="rightContainer">
        <h1 className="h1-card name score">{score}/100</h1>
        <div className="card-picto-container">
          <div className="card-picto-city">
            {" "}
            {/* <img className="image-picto" src="../assets/dechets.svg" alt="" /> */}
            <div className="image-picto-dechets"></div>
            <h2 className="h2-card">{dechets}/5</h2>
            <p>
              Traitement <br /> des déchets
            </p>
          </div>
          <div className="card-picto-city">
            {" "}
            <div className="image-picto-green"></div>
            <h2 className="h2-card">{espace} ha</h2>
            <p>
              Espaces <br /> verts
            </p>
          </div>
          <div className="card-picto-city">
            {" "}
            <div className="image-picto-water"></div>
            <h2 className="h2-card">{qualite}</h2>
            <p>
              Qualité <br /> de l'eau
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
