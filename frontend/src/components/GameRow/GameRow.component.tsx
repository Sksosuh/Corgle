import { FC } from "react";
import Tile from "../Tile/Tile.component";
import "./GameRow.scss";
import { State } from '../Tile/State.type';

interface Props {
  tiles: {
    letter?: string
    state?: State
  }[]
}

const GameRow: FC<Props> = (Props) => {

  return (
    <div className="row">
      {Props.tiles.map( tile => 
        <Tile letter={tile.letter} state={tile.state}></Tile>
      )}
    </div>
  );

}

export default GameRow;