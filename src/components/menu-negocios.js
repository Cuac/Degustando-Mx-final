import React from "react";
import "../assets/css/menu-negocios.css";

function MenuNegocios() {
  return (
    <section>
      <div className="contenedor-menu">
        <div className="menu-comida">
          <h2>Menú</h2>
          <ul>
            <li>Tacos de pastor con todo - $13</li>
            <li>Tacos de suadero con todo - $14</li>
            <li>Gringa de pastos natural - $40</li>
          </ul>
          <div className="boton-vamosacomer">
            <button className="boton">¡Vamos a comer!</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuNegocios;
