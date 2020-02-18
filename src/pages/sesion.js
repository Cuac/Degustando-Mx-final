import React from "react";
import '../assets/css/login.css';
import appLogo from '../assets/images/degus.png';
import { Link} from 'react-router-dom';


function Sesion() {
    return (
    
    <div className='flex-logo'>
        <h1 className='titulo'>Inicio de Sesión</h1>
        <div> 
            <img src={appLogo}  alt="Logo"></img>  
        </div>
        <div className='registro'>
            <input className='registros' placeholder= 'Correo electronico' />
            <input className='registros' placeholder= 'Contraceña' />
            <label className='check'><input  type='checkbox'/> Recordarme </label>
            <Link  className='boton' to='/'> Iniciar Sesión  </Link>
        </div>
        
    </div>
    )

}

export default Sesion;