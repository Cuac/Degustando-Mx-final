import React, {Component} from "react";

import appLogo from '../assets/images/degus.png';

//Definiendo el primer componente
class Inicio extends Component {

//Metodo Render para mostrar info por pantalla (JSX)
  render () { 
      return (
       
       <div className="flex-logo" >
         <div> 
             <img src={appLogo}  alt="Logo"></img>  
          </div>
       
        <div className="flex-inicio">
            <a href="registro.html">
             <div>
               <button class="registro-button">
                     Registrarse
                </button>
             </div> 
            </a> 

            <div >
              <i className= "fas fa-pizza-slice" > O </i>
            </div> 
              
            <a href="login.html">
            <div>
               <button class="registro-button">
                         Inicio de Sesion 
                </button>
            </div>
            </a>

         </div>

        </div> 
       );
    }
}

export default Inicio;






