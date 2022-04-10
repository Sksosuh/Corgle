import { FC,} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Modal from '../Modal.component';

interface Props {
  isShowing: boolean
  close: any
}

const HowToModal: FC<Props> = (Props) => {
  return (
    <div className='modal'>
      <Modal isShowing={Props.isShowing}>
        <h2>How to Play</h2>
        <p> Each guess must be a valid nth-letter Dog Name (Length of name is subject to change day to day).</p>
        <p> Hit the enter button to submit.</p>
         <p> After each guess, the color of the tiles will change to show how close your guess was to the dog's name.</p>
        <button onClick={ Props.close }><FontAwesomeIcon icon={'times'}/></button>
      </Modal>
    </div>
  );
};

export default HowToModal;