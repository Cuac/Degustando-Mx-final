import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Login from './App';
import * as serviceWorker from './serviceWorker';
import App from './App';
import firebase from 'firebase';

ReactDOM.render(<App />, document.getElementById('root'));
firebase.initializeApp({
    apiKey: "api-key",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "project-id",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "sender-id",
    appID: "app-id",
  });
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
