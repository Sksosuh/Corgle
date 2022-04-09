import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import ModalRoot from './components/Modal/ModalRoot/ModalRoot.component';

library.add(far, faQuestionCircle);

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ModalRoot/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
