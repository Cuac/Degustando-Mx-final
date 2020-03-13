import React from "react";
import "../assets/css/menu-negocios.css";
import Button from 'muicss/lib/react/button';
import {Link} from 'react-router-dom';

function MenuNegocios() {
  return (
    <section>
      <div className="contenedor-menu">
        <div className="menu-comida">
          <h2>Menú</h2>
          <ul>
            <li>Tacos de pastor con todo - $13</li>
            <li>Tacos de suadero con todo - $14</li>
            <li>Gringa de pastor natural - $40</li>
            <li>Taco de costilla natural - $12</li>
            <li>Taco de costilla con queso - $19</li>
            <li>Orden de tacos de surtido - $25</li>
            <li>Taco campechano sencillo - $18</li>
            <li>Taco de chorizo con queso - $12</li>

          </ul>
          <div className="boton-vamosacomer">
          <Link to="/ir-a-comer">
           <Button color="primary"  >¡Ir a comer!</Button>
          {/* <Link className='' to='/ir-a-comer'> ¡Ir a comer!  </Link> */}
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuNegocios;
