import React, {Component} from "react";
import appLogo from '../assets/images/degus.png';
import '../assets/css/inicio.css';
import { Link} from 'react-router-dom';

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

            <Link className='boton' to='/login'> Registrarme  </Link>

            <div >
               O
            </div> 
              
<<<<<<< HEAD
            <a href="/Login">
            <div>
               <button class="registro-button">
                         Inicio de Sesion 
                </button>
            </div>
            </a>
=======
            <Link className='boton' to='/sesion'> Iniciar Sesión  </Link>
>>>>>>> origin/login

         </div>

        </div> 
       );
    }
}

export default Inicio;






