import {FC, useState, useEffect} from "react"; 
import CurrentRow from "../GameRows/CurrentRow.component";
import CompletedRow from "../GameRows/CompletedRow.component";
import EmptyRow from "../GameRows/EmptyRow.component";
import { State } from "../Tile/State.type";
import './GameBoardLayout.scss';

interface Props {
  imgUrl: string
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  isRevealing?: boolean,
  guesses: string[],
  currentGuess: string
  answer: string
}

const BoardLayout: FC<Props> = (Props) => {
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
  ];
  type KeyValue = "ENTER" | "DELETE";
  const onClick = (value: KeyValue) => {
    if (value === "ENTER") {
      return Props.onEnter();
    } else if (value === "DELETE") {
      Props.onDelete();
    } else {
      Props.onChar(value);
    }
    if (value === "DELETE") {
      return Props.onDelete();
    }
    return Props.onChar(value);
  };

  useEffect(() => {
    const listener = (e:KeyboardEvent) => {
      if(e.code === "Enter") {
        Props.onEnter();
      } else if(e.code === "Backspace") {
        Props.onDelete();
      } else {
        const key = e.key.toUpperCase();
        if(key.length === 1 && key >= "A" && key <= "Z") {
          Props.onChar(key);
        }
      }
    };
    window.addEventListener("keyup", listener);
    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, [Props.onEnter,Props. onDelete, Props.onChar]);

  const empties = Props.guesses.length < 5 ? Array.from(Array(5 - Props.guesses.length)) : []

  return (
    <div className='board-container'>
      <div className="imgsContainer">
        <div className='one'></div>
        <div className='two'></div>
        <div className='three'></div>
        <div className='four'></div>
      </div>
      <div className='board'>
      {Props.guesses.map((guess, i) => (
        <CompletedRow key={i} guess={guess} answer={Props.answer} />
      ))}
      {Props.guesses.length < 6 && <CurrentRow answer={Props.answer} guess={Props.currentGuess} />}
      {empties.map((_, i) => (
        <EmptyRow key={i} answer={Props.answer}/>
      ))}
      </div>
    </div>
  );
}

export default BoardLayout;