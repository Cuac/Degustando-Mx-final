import React from "react";
import MyMapComponent from "../components/ubicacion";
import "../assets/css/ir-a-comer.css";
import Regresar from "../components/regresar";

function IrAComer() {
  return (
    <div>
      <Regresar />
      <div className="mapa-a-comer">
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `80vh`}} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div className="boton-vamosacomer">
        <button className="boton"> Aceptar </button>
      </div>

    </div>
  );
}

export default IrAComer;
