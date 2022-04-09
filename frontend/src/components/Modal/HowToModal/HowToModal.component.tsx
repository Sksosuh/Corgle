import { FC,} from 'react';
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
        <p> This is a pararaph on how to play</p>
        <button onClick={ Props.close }>Close Modal</button>
      </Modal>
    </div>
  );
};

export default HowToModal;