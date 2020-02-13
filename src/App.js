import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/css/App.css'; //Importando estilos 
<<<<<<< HEAD
import './assets/css/login.css'
import Inicio from './pages/inicio';
import Login from './pages/login'
import Negocios from './pages/negocios';

=======
import './assets/css/inicio.css';


//Importando el componente Inicio
import Inicio from './pages/inicio';
import Calificar from "./pages/calificar";
>>>>>>> origin/calificar

function App () {
    return (

      <BrowserRouter>
        <Switch>
           <Route exact path="/" component={Inicio}/>
<<<<<<< HEAD
           <Route path="/Login" component={Login}/>
           <Route path="/Negocios" component={Negocios}/>
           
=======
           <Route path="/" component={Calificar}/>

>>>>>>> origin/calificar
        </Switch>
      </BrowserRouter>
  );
}

export default App;

