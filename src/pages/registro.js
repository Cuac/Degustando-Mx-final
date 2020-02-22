import React, { useState } from "react";
import '../assets/css/login.css';
import appLogo from '../assets/images/degus.png';


function Sesion (props) {
    const [nom, setNom] = useState("");
    const [correo, setCorreo] = useState("");
    const [correo2, setCorreo2] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");
  
    const handleChangeCero = event => {
        setNom(event.target.value);
    };
    const handleChange = event => {
      setCorreo(event.target.value);
    };
    const handleChangeOne = event => {
      setCorreo2(event.target.value);
    };
    const handleChangeTwo = event => {
        setPass(event.target.value);
      };
      const handleChangeTree = event => {
        setPass2(event.target.value);
      };
    const handleSubmit = event => {
      event.preventDefault();

      if (nom && nom.length > 2 && correo && correo2 && pass && correo === correo2 && pass2 && pass === pass2){
        console.log("El usuario registrado es: "); 
        alert  ("Felicidades haz sido registrado");
        props.history.push('/mapa');
      } else{
        alert ('Llenar todos los campos por favor')
      }
    };
  
    return (
    
    <div className='flex-logo'>
        <h1 className='titulo'>Registro</h1>
        <div> 
            <img src={appLogo}  alt="Logo"></img>  
        </div>
        <form className='registro' onSubmit={handleSubmit}>
            <input onChange={handleChangeCero} className='registros' placeholder= 'Nombre del Garnachero' />
            <input onChange={handleChange} className='registros' placeholder= 'Correo electronico' />
            <input onChange={handleChangeOne} className='registros' placeholder= 'Confirmar correo electronico'/>
            <input onChange={handleChangeTwo} className='registros' placeholder= 'Contraseña' />
            <input onChange={handleChangeTree} className='registros' type='password' placeholder= 'Confirmar contraseña' />
            <label className='check'><input  type='checkbox'/> Recordarme </label>
            <button className='botonOne'> Registrarme  </button>
        </form>
        
    </div>
    )

}
export default Sesion;