import React from "react";
import '../assets/css/login.css';
import appLogo from '../assets/images/degus.png';
import { Link} from 'react-router-dom';



function Login() {
    return (
    
    <div className='flex-logo'>
        <h1 className='titulo'>Registro</h1>
        <div> 
            <img src={appLogo}  alt="Logo"></img>  
        </div>
        <div className='registro'>
            <input className='registros' placeholder= 'Correo electronico' />
            <input className='registros' placeholder= 'Confirmar correo electronico'/>
            <input className='registros' placeholder= 'Contraseña' />
            <input className='registros' placeholder= 'Confirmar contraseña' />
            <label className='check'><input  type='checkbox'/> Recordarme </label>
            <Link  className= 'boton' to='/mapa'> Registrarme  </Link>
        </div>
        
    </div>
    )

}
export default Login;