import React from 'react';
<<<<<<< HEAD
import Login from './pages/login'

import './pages/login.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proyecto Degustando
        </a>
      </header>
    </div>
=======
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
>>>>>>> origin/inicio
  );
}

export default App;

