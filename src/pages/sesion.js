import React from "react";
import '../assets/css/login.css';
import appLogo from '../assets/images/degus.png';
import { Link} from 'react-router-dom';


function Sesion() {
    return (
    
    <div className='centro'>
        <h1 className='titulo'>Registro</h1>
        <div className="flex-logo" >
         <div> 
             <img src={appLogo}  alt="Logo"></img>  
          </div>
        </div>
        <div className='registro'>
            <input className='registros' placeholder= 'Correo electronico' />
            <input className='registros' placeholder= 'Contraceña' />
            <input className='check' type='checkbox' placeholder= "Recordarme" />
            <Link  className='boton' to='/'> Iniciar Sesión  </Link>
        </div>
        
    </div>
    )

}
export default Sesion;