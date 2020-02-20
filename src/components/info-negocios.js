import React from "react";
import "../assets/css/info-negocios.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faMapMarkerAlt,
  faPhone,
  faClock,
  faStar
} from "@fortawesome/free-solid-svg-icons";

import logoTacosJuan1 from "../assets/images/logo-tacos-donjuan.png";

function InfoNegocios() {
  return (
    <div className="info-negocio">
      <div className="img-logo-taco">
        <img src={logoTacosJuan1} alt="logo-tacojuan" />
      </div>
      <div className="titulo-negocio">
        <h2>Tacos Juan</h2>
      </div>

      <div className="star-review">
        <FontAwesomeIcon icon={faStar} />
        <p>4.6</p>
      </div>

      <div className="lista-datos">
        <ul>
          <li>
            <FontAwesomeIcon icon={faClock} />
            11:00-01:00
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            55-55-55-55
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            Vicente Suárez esq. Circuito Vasconcelos
          </li>

          <li>Abren todos los domingos y se admiten mascotas.</li>
        </ul>
      </div>
    </div>
  );
}

export default InfoNegocios;
