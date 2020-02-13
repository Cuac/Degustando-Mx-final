import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
//import './assets/scss/App.scss'; //Importando estilos 
//import './assets/scss/Inicio.scss';

//Importando el componente Inicio
import Inicio from './pages/inicio';
import Negocios from './pages/negocios';

function App () {
    return (

      <BrowserRouter>
        <Switch>

           <Route path="/Inicio" component={Inicio}/>
           <Route path="/Negocios" component={Negocios}/>

        </Switch>
      </BrowserRouter>
  );
}

export default App;

