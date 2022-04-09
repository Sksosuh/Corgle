import { FC } from "react";
import "./Tile.scss";
import { State } from './State.type';

interface Props {
  letter?: string
  state?: State
}

const Tile: FC<Props> = (Props) => {

  return (
    <div className={"tile " + (Props.state)}>
      {Props.letter}
    </div>
  );

}

Tile.defaultProps = {
  state: "empty"
}

export default Tile