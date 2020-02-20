import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/css/App.css'; //Importando estilos 
import Calificar from "./pages/calificar";
import './assets/css/login.css'
import './assets/css/init.css';
import Inicio from './pages/inicio';
import Registro from './pages/registro'
import Negocios from './pages/negocios';
import Login from './pages/login';
import Mapa from './pages/mapa';

function App () {
    return (

      <BrowserRouter>
        <Switch>
           <Route exact path="/" component={Inicio}/>
           <Route path="/Calificar" component={Calificar}/>
           <Route path="/Registro" component={Registro}/>
           <Route path="/Negocios" component={Negocios}/>
           <Route path="/Login" component={Login}/>
           <Route path="/mapa" component={Mapa}/>

        </Switch>

      </BrowserRouter>
  );
}

export default App;

