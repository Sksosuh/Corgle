import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar.component';
import BoardLayout from './components/GameBoardLayout/GameBoardLayout.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far, faQuestionCircle, faChartBar } from '@fortawesome/free-regular-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import ModalRoot from './components/Modal/ModalRoot/ModalRoot.component';

library.add(faCog, far, faQuestionCircle, faChartBar, faChartBar);


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ModalRoot/>
      <BoardLayout></BoardLayout>
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
