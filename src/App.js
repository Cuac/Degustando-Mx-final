import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/css/App.css'; //Importando estilos 
import './assets/css/inicio.css';

//Importando el componente Inicio
import Inicio from './pages/inicio';
<<<<<<< HEAD
import Negocios from './pages/negocios';
=======
>>>>>>> origin/inicio

function App () {
    return (

      <BrowserRouter>
        <Switch>

<<<<<<< HEAD
           <Route path="/Inicio" component={Inicio}/>
           <Route path="/Negocios" component={Negocios}/>
=======
           <Route exact path="/" component={Inicio}/>
>>>>>>> origin/inicio

        </Switch>
      </BrowserRouter>
  );
}

export default App;

