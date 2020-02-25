import React, {useState} from "react";
import '../assets/css/login.css';
import appLogo from '../assets/images/logo-degustado-nuevo.png.JPG';

function Sesion(props) {
  const [correo, setCorreo] = useState("");
  const [pass, setPass] = useState("");

  const handleChange = event => {
    setCorreo(event.target.value);
  };
  const handleChangeTwo = event => {
    setPass(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
       console.log(correo);
      console.log(pass);
    if (correo === 'degustando@degustando.com' && pass === '1234'){
      console.log('Usuario valido');
      props.history.push('/mapa');
    } else{
      alert ('Usuario invalido, inteta de nuevo')
    }
  };

    return (
    
    <div className='flex-logo'>
        <h1 className='titulo'>Inicio de Sesión</h1>
        <div> 
            <img src={appLogo}  alt="Logo"></img>  
        </div>
        <form className='registro' onSubmit={handleSubmit}>
            <input onChange={handleChange} className='registros' placeholder= 'Correo electronico' />
            <input onChange={handleChangeTwo} className='registros' type='password' placeholder= 'Contraseña' />
            <label className='check'><input  type='checkbox'/> Recordarme </label>
            <button className='botonOne'> Iniciar Sesión  </button>
        </form>
        
    </div>
    )

}

export default Sesion;