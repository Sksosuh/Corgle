import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar.component';
import BoardLayout from './components/GameBoardLayout/GameBoardLayout.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far, faQuestionCircle, faChartBar } from '@fortawesome/free-regular-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import ModalRoot from './components/Modal/ModalRoot/ModalRoot.component';
import GameRow from './components/GameRows/CurrentRow.component';
import { State } from './components/Tile/State.type';

library.add(faCog, far, faQuestionCircle, faChartBar, faChartBar);


function App() {
  const answer: string = "DODGER";
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
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");

  const onChar = (value: string) => {
    console.log(value);
    if (currentGuess.length < 5 && guesses.length < 6) {
      setCurrentGuess(`${currentGuess}${value}`);
    }
  };

  const onDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
    console.log("DELETE THIS SHIT")
  };

  const onEnter = () => {
    // if (!(currentGuess.length === answer.length)) {
    //   setIsNotEnoughLetters(true)
    //   return setTimeout(() => {
    //     setIsNotEnoughLetters(false)
    //   }, 2000)
    console.log("enter :)");
    }

  return (
    <div className='App'>
      <Navbar></Navbar>
      <ModalRoot/>
      <div className='game'>
        <BoardLayout imgUrl='FUCK' onChar={onChar} onDelete={onDelete} onEnter={onEnter} guesses={guesses} currentGuess={''} answer={"DODGER"}/>
      </div>
    </div>
  );
}

export default App;
