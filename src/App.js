import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/css/App.css'; //Importando estilos 
import './assets/css/Inicio.css';
import './assets/css/login.css'
import Inicio from './pages/inicio';
import Login from './pages/login'

//Importando el componente Inicio



function App () {
    return (

      <BrowserRouter>
        <Switch>

           <Route path="/Inicio" component={Inicio}/>
           <Route path="/Login" component={Login}/>


        </Switch>
      </BrowserRouter>
  );
}

export default App;

