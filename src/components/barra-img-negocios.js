import React from "react";
import "../assets/css/barra-img-negocios.css";

import imagenTaco1 from "../assets/images/tacos3.jpg";
import imagenTaco2 from "../assets/images/tacos2.jpg";

function BarraImgNegocios() {
  return (
    <div className="imagenes-negocio">
      <div id="imagen-1-tacosjuan">
        <img src={imagenTaco1} alt="tacos-mexico" />
      </div>

      <div id="imagen-2-tacosjuan">
        <img src={imagenTaco2} alt="tacos-ciudad-de-mexico" />
      </div>
    </div>
  );
}

export default BarraImgNegocios;
