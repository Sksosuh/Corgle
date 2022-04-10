import { FC } from "react";
import Tile from "../Tile/Tile.component";
import "./GameRow.scss";

interface Props {
  answer: string
}

const EmptyRow: FC<Props> = (Props) => {
  const emptyCells = Array.from(Array(Props.answer.length));
  const style = {
    gridTemplateColumns: 'repeat(' + Props.answer.length + ', 1fr)'
  }

  return (
      <div className="row" style={style}>
        {emptyCells.map((_, i) => (
          <Tile key={i} />
        ))}
      </div>
    );
}

export default EmptyRow;