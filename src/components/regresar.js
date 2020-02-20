import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/regresar.css";

function Regresar() {
  return (
    <div className="navbar-arrow">
      <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
    </div>
  );
}

export default Regresar;
