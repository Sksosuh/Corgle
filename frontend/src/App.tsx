import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far, faQuestionCircle, faChartBar } from '@fortawesome/free-regular-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import ModalRoot from './components/Modal/ModalRoot/ModalRoot.component';
import GameRow from './components/GameRow/GameRow.component';
import { State } from './components/Tile/State.type';

library.add(faCog, far, faQuestionCircle, faChartBar, faChartBar);


function App() {
  const c: State = "correct";
  const lettersStates = [
    {letter: "d", state: c},
    {letter: "o", state: c},
    {letter: "d", state: c},
    {letter: "g", state: c},
    {letter: "e", state: c},
  ];
  const empty = [
    {letter: ""},
    {letter: ""},
    {letter: ""},
    {letter: ""},
    {letter: ""},
  ]
  
  return (
    <div className='App'>
      <Navbar></Navbar>
      <ModalRoot/>
      <div className='game'>
        <div className='board-container'>
          <div className='board'>
            <GameRow tiles={lettersStates}></GameRow> 
            <GameRow tiles={empty}></GameRow> 
            <GameRow tiles={empty}></GameRow> 
            <GameRow tiles={empty}></GameRow> 
            <GameRow tiles={empty}></GameRow> 
            <GameRow tiles={empty}></GameRow> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
