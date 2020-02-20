import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/css/App.css'; //Importando estilos 
import Calificar from "./pages/calificar";
import './assets/css/login.css'
import './assets/css/init.css';
import Inicio from './pages/inicio';
import Login from './pages/login'
import Negocios from './pages/negocios';
import Sesion from './pages/sesion';
import Mapa from './pages/mapa';
import IrAComer from './pages/ir-a-comer';

function App () {
    return (

      <BrowserRouter>
        <Switch>
           <Route exact path="/" component={Inicio}/>
           <Route path="/Calificar" component={Calificar}/>
           <Route path="/Login" component={Login}/>
           <Route path="/Negocios" component={Negocios}/>
           <Route path="/Sesion" component={Sesion}/>
           <Route path="/mapa" component={Mapa}/>
           <Route path="/ir-a-comer" component={IrAComer}/>

        </Switch>

      </BrowserRouter>
  );
}

export default App;

