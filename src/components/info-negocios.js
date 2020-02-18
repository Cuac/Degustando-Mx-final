import React from "react";
import './info-negocios.css';

import logoTacosJuan1 from "../assets/images/tacos-juan-2.png";

function InfoNegocios () {
    return (
        <div class="info-negocio">
             <div className="img-logo-taco">
                    <img src={logoTacosJuan1} alt="logo-tacojuan" />
             </div>
            
             <div className="titulo-negocio">
                <h2>Tacos Juan</h2>
            </div>
            
            <div className="lista-datos">
                <ul>
                    <li>
                        11:00-01:00
                    </li>
                    <li>
                        55-55-55-55
                    </li>
                    <li>
                        Vicente Suárez esq. Circuito José Vasconcelos
                    </li>
                    
                    <li>
                        Abren todos los domingos y se admiten mascotas.
                    </li>
                </ul>
            </div>
        </div>  
    );
  }


export default InfoNegocios; 