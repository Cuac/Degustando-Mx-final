import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/css/App.css'; //Importando estilos 
import './assets/css/inicio.css';


//Importando el componente Inicio
import Inicio from './pages/inicio';
import Calificar from "./pages/calificar";

function App () {
    return (

      <BrowserRouter>
        <Switch>

           <Route exact path="/" component={Inicio}/>
           <Route path="/" component={Calificar}/>

        </Switch>
      </BrowserRouter>
  );
}

export default App;

