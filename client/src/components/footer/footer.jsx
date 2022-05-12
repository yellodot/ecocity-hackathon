import React from "react";
import "../footer/footer.css";
import ecofooter from "../../assets/images/ecofooter.svg";


const footer = () => {
  return (
    <div className="Footer">
        <div className="container-footer">
            <img src={ecofooter} alt={ecofooter} />
            <h3> Js wilders 2022. Tous droits réservés.</h3>
        </div>
    </div>
  )
}

export default footer;