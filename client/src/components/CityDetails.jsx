import React from "react";
import "./CityDetails.css";

const CityDetails = () => {
  return (
    <div>
      <div className="container-cities">
        {" "}
        <div className="img-city" />
        <h1>Strasbourg</h1>
        <div className="picto-container">
          <div className="picto-city">
            {" "}
            {/* <img className="image-picto" src="../assets/dechets.svg" alt="" /> */}
            <div className="image-picto-dechets"></div>
            <h2>5/5</h2>
            <p>
              Traitement <br /> des déchets
            </p>
          </div>
          <div className="picto-city">
            {" "}
            <div className="image-picto-green"></div>
            <h2>100%</h2>
            <p>
              Espaces <br /> verts
            </p>
          </div>
          <div className="picto-city">
            {" "}
            <div className="image-picto-water"></div>
            <h2>Bonne</h2>
            <p>
              Qualité <br /> de l'eau
            </p>
          </div>
          <div className="picto-city">
            {" "}
            <div className="image-picto-bike"></div>
            <h2>100%</h2>
            <p>
              Pistes <br /> cyclables
            </p>
          </div>
        </div>
        <button className="button-city">Trouver un logement</button>
      </div>
      <div className="container-ville-verte">
        <h2 className="title-green">Nom de la ville + une ville verte</h2>
        <div className="green-line"></div>
        <div className="picto-container-2">
          <div className="picto-city">
            {" "}
            <div className="image-picto-certif"></div>
            <h3 className="h3-ville-verte">Certifié</h3>
            <p className="p-ville-verte">Label</p>
          </div>
          <div className="picto-city">
            {" "}
            <div className="image-picto-transport"></div>
            <h3 className="h3-ville-verte">Bus/Tram</h3>
            <p className="p-ville-verte">Transports </p>
          </div>
          <div className="picto-city">
            {" "}
            <div className="image-picto-budget"></div>
            <h3 className="h3-ville-verte">10 000</h3>
            <p className="p-ville-verte">Budget </p>
          </div>
          <div className="picto-city">
            {" "}
            <div className="image-picto-air"></div>
            <h3 className="h3-ville-verte">Mauvaise</h3>
            <p className="p-ville-verte">Qualité de l'air </p>
          </div>
          <div className="picto-city">
            {" "}
            <div className="image-picto-habitants"></div>
            <h3 className="h3-ville-verte">94 230</h3>
            <p className="p-ville-verte">Nombre d'habitants </p>
          </div>
          <div className="picto-city">
            {" "}
            <div className="image-picto-bobo"></div>
            <h3 className="h3-ville-verte">88%</h3>
            <p className="p-ville-verte">
              Compatible <br /> bobo{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
