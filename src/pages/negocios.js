import React from "react";

import Regresar from "../components/regresar";
import BarraImgNegocios from "../components/barra-img-negocios";
import InfoNegocios from "../components/info-negocios";
import OpinionsUsers from "../components/opinions-users";
import MenuNegocios from "../components/menu-negocios";

function Negocios() {
  return (
    <div>
      <Regresar />
      <BarraImgNegocios />
      <InfoNegocios />
      <OpinionsUsers />
      <MenuNegocios />
    </div>
  );
}

export default Negocios;
