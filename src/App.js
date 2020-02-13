import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/css/App.css'; //Importando estilos 
import './assets/css/inicio.css';

//Importando el componente Inicio
import Inicio from './pages/inicio';

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

