import {FC} from "react"; 
import GameRow from "../GameRow/GameRow.component";
import DescriptionModal from "../Modal/DescriptionModal/DescriptionModal.component";
import ModalService from '../../services/ModalService';
import { State } from "../Tile/State.type";
import './GameBoardLayout.scss';

interface Props {
  imgUrls: string[]
}
const addModal = (modalType: FC<any>) => {
  ModalService.open(modalType);
};
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
  return (
    <div className='board-container'>
      <div className="imgsContainer"  onClick={ () => addModal(DescriptionModal) }>
      {Props.imgUrls.map( (imgUrl, i) => 
        <div className="img" id={"img"+i} style={{backgroundImage: "url("+imgUrl+")"}}></div>
      )}
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