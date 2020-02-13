import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/css/App.css'; //Importando estilos 
<<<<<<< HEAD
import './assets/css/Inicio.css';
=======
>>>>>>> origin/inicio

import './assets/css/login.css'
import Inicio from './pages/inicio';
<<<<<<< HEAD
import Negocios from './pages/negocios';
=======
import Login from './pages/login'
import Negocios from './pages/negocios';

>>>>>>> origin/inicio

function App () {
    return (

      <BrowserRouter>
        <Switch>

           <Route exact path="/" component={Inicio}/>
<<<<<<< HEAD
=======
        
           <Route path="/Login" component={Login}/>
        
           <Route path="/Negocios" component={Negocios}/>

>>>>>>> origin/inicio

        </Switch>
      </BrowserRouter>
  );
}

export default App;

