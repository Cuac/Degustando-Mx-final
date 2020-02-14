import React from "react";
import '../assets/css/login.css';
import appLogo from '../assets/images/degus.png';
import { Link} from 'react-router-dom';




function Login() {
    return (
    
    <div className='centro'>
        <h1 className='titulo'>Registro</h1>
        <div className="flex-logo" >
         <div> 
             <img src={appLogo}  alt="Logo"></img>  
          </div>
        </div>  
        <input className='registros' placeholder= 'Correo electronico' />
        <input className='registros' placeholder= 'Confirmar correo electronico'/>
        <input className='registros' placeholder= 'Confirmar contraceña' />
        <input className='registros' placeholder= 'Contraceña' />
        <input className='check' type='checkbox' placeholder= "Recordarme" />
        <Link  className= 'boton'to='/inicio'> Registrarme  </Link>

        
    </div>
    )

}
export default Login;