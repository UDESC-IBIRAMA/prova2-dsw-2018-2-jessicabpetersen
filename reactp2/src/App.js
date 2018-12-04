import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import Relogio from './Relogio'
import Formulario from './Formulario'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Menu</h1>
          <Link to='/relogio'>Relógio</Link>
          <Link to='/formulario'>Formulário</Link>
      </div>
    );
  }
}

export default App;
