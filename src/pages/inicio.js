import React, {Component} from "react";
import appLogo from '../assets/images/degus.png';
import '../assets/css/inicio.css';

//Definiendo el primer componente
class Inicio extends Component {

//Metodo Render para mostrar info por pantalla (JSX)
  render () { 
      return (
       
       <div className="flex-logo" id="inicio" >
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
               O
            </div> 
              
            <a href="/Login">
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






