import { FC } from "react";
import Tile from "../Tile/Tile.component";
import "./GameRow.scss";
import { CharState, CharValue  } from './CharTypes.type';
import { solution } from '../../Word';

interface Props {
  guess: string
  answer: string
}

const CompletedRow: FC<Props> = (Props) => {
  const states = getGuessStatuses(Props.guess)
  const style = {
    gridTemplateColumns: 'repeat(' + Props.answer.length + ', 1fr)'
  }

  return (
    <div className="row" style={style}>
      {Props.guess.split('').map((letter: string, i: number) => (
        <Tile key={i} letter={letter} state={states[i]} />
      ))}
    </div>
  );

}

export default CompletedRow;

const getGuessStatuses = (guess: string): CharState[] => {
  const splitSolution = solution.split('')
  const splitGuess = guess.split('')

  const solutionCharsTaken = splitSolution.map((_) => false)

  const statuses: CharState[] = Array.from(Array(guess.length))

  // handle all correct cases first
  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    }
  })

  splitGuess.forEach((letter, i) => {
    if (statuses[i]) return

    if (!splitSolution.includes(letter)) {
      // handles the absent case
      statuses[i] = 'absent'
      return
    }

    // now we are left with "present"s
    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === letter && !solutionCharsTaken[index]
    )

    if (indexOfPresentChar > -1) {
      statuses[i] = 'present'
      solutionCharsTaken[indexOfPresentChar] = true
      return
    } else {
      statuses[i] = 'absent'
      return
    }
  })

  return statuses
}