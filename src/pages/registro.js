import React, { useState } from "react";
import firebase from 'firebase';
import '../assets/css/login.css';
import appLogo from '../assets/images/logo-degustado-nuevo.png.JPG';


function Sesion (props) {
    const [nom, setNom] = useState("");
    const [correo, setCorreo] = useState("");
    const [correo2, setCorreo2] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");
    const [usuario, setUsuario] =useState (null);
  
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
      
      const login = event =>{
        event.preventDefault();
      firebase
      .auth()
      .createUserWithEmailAndPassword(nom,correo, correo2, pass, pass2)
      .then(usuario =>{
        setUsuario (usuario);
      } )
      .catch(function(error) {
        alert.log(error);
        props.history.push('/mapa');
      
});
    };
  
    return (
    
    <div className='flex-logo'>
        <h1 className='titulo'>Registro</h1>
        <div> 
            <img src={appLogo}  alt="Logo"></img>  
        </div>
        <form className='registro' onSubmit={login}>
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