import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
//import './assets/scss/App.scss'; //Importando estilos 
//import './assets/scss/Inicio.scss';
import Inicio from './pages/inicio';
import Login from './pages/login'
//Importando el componente Inicio



function App () {
    return (

      <BrowserRouter>
        <Switch>

           <Route path="/Inicio" component={Inicio}/>
           <Route path="/Inicio" component={Login}/>


        </Switch>
      </BrowserRouter>
  );
}

export default App;

