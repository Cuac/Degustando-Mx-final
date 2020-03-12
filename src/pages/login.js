import React, {useState, Component} from "react";
import '../assets/css/login.css';
import appLogo from '../assets/images/logo-degustado-nuevo.png.JPG';
import fire from '../scrips/fire';

//function Sesion(props) {

class Sesion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      remember: false
    }; 
  }
  
  /* const [correo, setCorreo] = useState("");
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
  }; */

    
    componentDidMount() { 
      console.log(fire)
    }
    guardar(evt){
      evt.preventDefault();
      const data = fire.database().ref('users')
      const email = document.getElementById('user').value;
      const pass = document.getElementById('pass').value;
      const user = {
        email: email,
        pass: pass
      };

      try {
        data.push(user);
        console.log('exito');
        document.getElementById('user').value='';
        document.getElementById('pass').value='';
        console.log('este es el corro ' , email, 'este es la contraseña' , pass );
      } catch(e) {
        console.log('error', e);
      }
    }




    render() {
      return (
    
        <div className='flex-logo'>
            <h1 className='titulo'>Inicio de Sesión</h1>
            <div> 
                <img src={appLogo}  alt="Logo"></img>  
            </div>
            {/* <form className='registro' onSubmit={handleSubmit}>
                <input onChange={handleChange} className='registros' placeholder= 'Correo electronico' />
                <input onChange={handleChangeTwo} className='registros' type='password' placeholder= 'Contraseña' />
                <label className='check'><input  type='checkbox'/> Recordarme </label>
                <button className='botonOne'> Iniciar Sesión  </button>
            </form> */}
            <form className='registro'onSubmit={this.guardar.bind(this)} >
                <input id="user"  className='registros' placeholder= 'Correo electronico' />
                <input id="pass"  className='registros' type='password' placeholder= 'Contraseña' />
                <label className='check'><input  type='checkbox'/> Recordarme </label>
                <button  className='botonOne'> Iniciar Sesión  </button>
            </form>
            
        </div>
        )
    }

}

export default Sesion;