import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/scss/App.scss'; //Importando estilos 
import './assets/scss/Inicio.scss';

//Importando el componente Inicio
import Inicio from './pages/Inicio';

function App () {
    return (

      <BrowserRouter>
        <Switch>

           <Route path="/Inicio" component={Inicio}/>

        </Switch>
      </BrowserRouter>
  );
}

export default App;

