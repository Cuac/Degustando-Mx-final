import React from "react";

import '../assets/css/mapa.css';



 function  Mapa () {
   return (
     <div className="flex-inicio" > 
         <input className="flex-input" placeholder="Buscar ...."   />
       <div>
         <i class="fa fa-bars"></i>
       </div> 
   
       <div>
          <ul>
            <li>Bebidas</li>
            <li>Mexicana</li>
            <li>Vegetariana</li>
            <li>Postres</li>
            <li>Desayunos</li>
            <li>Postres</li>
            </ul>
        </div>
      </div>
    );
}

export default Mapa;