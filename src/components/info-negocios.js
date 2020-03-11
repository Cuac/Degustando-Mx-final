import React from "react";
import "../assets/css/info-negocios.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faMapMarkerAlt,
  faPhone,
  faClock,
  faStar,
  faComment
} from "@fortawesome/free-solid-svg-icons";

import logoTacosJuan1 from "../assets/images/logo-tacos-donjuan.png";

function InfoNegocios() {
  return (
    <div className="info-negocio">
      <div className="contenedor-titulo-negocios">
        <div className="img-logo-taco">
          <img src={logoTacosJuan1} alt="logo-tacojuan" />
        </div>
        <div className="titulo-negocio">
          <h2>Tacos Juan </h2>
          <div className="star-review">
            <FontAwesomeIcon icon={faStar} />
            <p>4.6</p>
          </div>
        </div>
      </div>

      <div className="lista-datos">
        <ul>
          <li>
            <FontAwesomeIcon icon={faClock} />
            <p>11:00-01:00</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            <p>55-55-55-55</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
           <p>Vicente Suárez esq. Circuito Vasconcelos</p> 
          </li>

          <li>
            <FontAwesomeIcon icon={faComment} /> 
            <p>Abren todos los domingos y se admiten mascotas.</p>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default InfoNegocios;
