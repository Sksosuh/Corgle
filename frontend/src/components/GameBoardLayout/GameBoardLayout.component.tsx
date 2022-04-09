import {FC} from "react"; 
import GameRow from "../GameRow/GameRow.component";
import { State } from "../Tile/State.type";
import './GameBoardLayout.scss';

interface Props {
  imgUrl: string
}

const BoardLayout: FC = () => {
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
  return (
    <div className='board-container'>
      <div className="imgsContainer">
        <div className='one'></div>
        <div className='two'></div>
        <div className='three'></div>
        <div className='four'></div>
      </div>
      <div className='board'>
        <GameRow tiles={lettersStates}></GameRow> 
        <GameRow tiles={empty}></GameRow> 
        <GameRow tiles={empty}></GameRow> 
        <GameRow tiles={empty}></GameRow> 
        <GameRow tiles={empty}></GameRow> 
        <GameRow tiles={empty}></GameRow> 
      </div>
    </div>
  );
}

export default BoardLayout;

/*<div class="BoardLayout">
  <div class="content">
  </div>
</div>*/