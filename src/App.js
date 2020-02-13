import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/css/App.css'; //Importando estilos 
import Calificar from "./pages/calificar";
import './assets/css/login.css'
import './assets/css/inicio.css';
import Inicio from './pages/inicio';
import Login from './pages/login'
import Negocios from './pages/negocios';

function App () {
    return (

      <BrowserRouter>
        <Switch>
           <Route exact path="/" component={Inicio}/>
           <Route path="/Calificar" component={Calificar}/>
           <Route path="/Login" component={Login}/>
           <Route path="/Negocios" component={Negocios}/>
        </Switch>

      </BrowserRouter>
  );
}

export default App;

