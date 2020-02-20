import React from "react";
import MyMapComponent from "../components/ubicacion";
import "../assets/css/ir-a-comer.css";

function IrAComer() {
  return (
    <div className="mapa-a-comer">
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `90vh`}} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

    </div>
  );
}

export default IrAComer;
