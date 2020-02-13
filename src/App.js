import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/css/App.css'; //Importando estilos 
import './assets/css/Inicio.css';

//Importando el componente Inicio
import Inicio from './pages/inicio';
import Negocios from './pages/negocios';

function App () {
    return (

      <BrowserRouter>
        <Switch>

           <Route exact path="/" component={Inicio}/>

        </Switch>
      </BrowserRouter>
  );
}

export default App;

