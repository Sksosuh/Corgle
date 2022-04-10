import { FC } from "react";
import Tile from "../Tile/Tile.component";
import "./GameRow.scss";

interface Props {
  answer: string
  guess: string
}

const CurrentRow: FC<Props> = (Props) => {
  const splitGuess = Props.guess.split('');
  const emptyCells = Array.from(Array(Props.answer.length - splitGuess.length));
  const style = {
    gridTemplateColumns: 'repeat(' + Props.answer.length + ', 1fr)'
  }

  return (
    <div className="row" style={style}>
      {splitGuess.map((letter, i) => (
        <Tile key={i} letter={letter}></Tile>
      ))}
      {emptyCells.map((_, i) => (
        <Tile key={i}/>
      ))}
    </div>
  );

}

export default CurrentRow;

