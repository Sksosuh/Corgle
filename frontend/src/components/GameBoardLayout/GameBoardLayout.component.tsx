import DescriptionModal from "../Modal/DescriptionModal/DescriptionModal.component";
import ModalService from '../../services/ModalService';
import {FC, useState, useEffect} from "react"; 
import CurrentRow from "../GameRows/CurrentRow.component";
import CompletedRow from "../GameRows/CompletedRow.component";
import EmptyRow from "../GameRows/EmptyRow.component";
import { State } from "../Tile/State.type";
import './GameBoardLayout.scss';
import { CharState } from "../GameRows/CharTypes.type";

interface Props {
  description: string
  imgUrls: string[]
}
const addModal = (modalType: FC<any>) => {
  ModalService.open(modalType);
};
interface Props {
imgUrls: string[]
onChar: (value: string) => void
onDelete: () => void
onEnter: () => void
isRevealing?: boolean,
guesses: string[],
currentGuess: string
answer: string
}
const BoardLayout: FC<Props> = (Props) => {

  const { onEnter, onDelete, onChar } = Props;
  type KeyValue = CharState | "ENTER" | "DELETE";

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
        onEnter();
      } else if(e.code === "Backspace") {
        onDelete();
      } else {
        const key = e.key.toUpperCase();
        if(key.length === 1 && key >= "A" && key <= "Z") {
          onChar(key);
        }
      }
    };
    window.addEventListener("keyup", listener);
    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, [onEnter, onDelete, onChar]);

  const empties = Props.guesses.length < Props.answer.length - 1 ? Array.from(Array(Props.answer.length - 1 - Props.guesses.length)) : []
  return (
    <div className='board-container'>
      <div className="imgsContainer"  onClick={ () => addModal(DescriptionModal) }>
      {Props.imgUrls.map( (imgUrl, i) => 
        <div className={Props.imgUrls.length === 1 ? "img oneImg" : "img"} id={"img"+i} style={{backgroundImage: "url("+imgUrl+")"}}></div>
      )}
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