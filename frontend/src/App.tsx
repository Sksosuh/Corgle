import React, { useEffect, useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar.component';
import BoardLayout from './components/GameBoardLayout/GameBoardLayout.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far, faQuestionCircle, faChartBar } from '@fortawesome/free-regular-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import ModalRoot from './components/Modal/ModalRoot/ModalRoot.component';
import { isWinningWord, solution } from './Word';
import { loadGameStateFromLocalStorage, saveGameStateToLocalStorage } from './localStorage';

library.add(faCog, far, faQuestionCircle, faChartBar, faChartBar);


function App() {
  const answer: string = "DODGER";

  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameWon, setIsGameWon] = useState(false);
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isNotEnoughLetters, setIsNotEnoughLetters] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [isWordNotFoundAlertOpen, setIsWordNotFoundAlertOpen] = useState(false);
  const [isGameLost, setIsGameLost] = useState(false);
  const [shareComplete, setShareComplete] = useState(false);
  const [guesses, setGuesses] = useState<string[]>(() => {
    const loaded = loadGameStateFromLocalStorage()
    if (loaded?.solution !== solution) {
      return []
    }
    if (loaded.guesses.includes(solution)) {
      setIsGameWon(true)
    }
    return loaded.guesses
  });

  useEffect(() => {
    saveGameStateToLocalStorage({ guesses, solution })
  }, [guesses])

  useEffect(() => {
    if (isGameWon) {
      setIsWinModalOpen(true)
    }
  }, [isGameWon])

  const onChar = (value: string) => {
    if (currentGuess.length < answer.length && guesses.length < 6) {
      setCurrentGuess(`${currentGuess}${value}`);
    }
  };

  const onDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
    console.log("DELETE THIS SHIT")
  };

  const onEnter = () => {
    console.log(currentGuess);
    if (!(currentGuess.length === answer.length)) {
      setIsNotEnoughLetters(true)
      return setTimeout(() => {
        setIsNotEnoughLetters(false)
      }, 2000)
    }

    // if (answer === currentGuess) {
    //   console.log(answer + "=" + currentGuess);
    //   setIsWordNotFoundAlertOpen(true)
    //   return setTimeout(() => {
    //     setIsWordNotFoundAlertOpen(false)
    //   }, 2000)
    // }

    const winningWord = isWinningWord(currentGuess)

    if (currentGuess.length === answer.length && guesses.length < 6 && !isGameWon) {
      setGuesses([...guesses, currentGuess])
      setCurrentGuess('')

      if (winningWord) {
        console.log("winner")
        return setIsGameWon(true)
      }

      if (guesses.length === 6) {
        setIsGameLost(true)
        return setTimeout(() => {
          setIsGameLost(false)
        }, 2000)
      }
    }
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