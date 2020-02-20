import React from "react";
import "../assets/css/barra-img-negocios.css";

import imagenTaco1 from "../assets/images/tacos1.jpg";
import imagenTaco2 from "../assets/images/tacos2.jpg";

function BarraImgNegocios() {
  return (
    <div className="imagenes-negocio">
      <div>
        <img src={imagenTaco1} alt="tacos-mexico" />
      </div>

      <div>
        <img src={imagenTaco2} alt="tacos-ciudad-de-mexico" />
      </div>
    </div>
  );
}

export default BarraImgNegocios;
