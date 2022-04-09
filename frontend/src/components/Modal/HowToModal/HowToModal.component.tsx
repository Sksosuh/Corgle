import { FC,} from 'react';
import React from 'react';
import Modal from '../Modal.component';
import ModalBody from '../ModalBody/ModalBody.component';

interface Props {
  isShowing: boolean
  header: string
  close: any
}

const HowToModal: FC<Props> = (Props) => {
  return (
    <div className='modal'>
      <Modal isShowing={Props.isShowing} header={'How to Play'}>
        <h3>How to Play</h3>
        <p> This is a pararaph on how to play</p>
        <button onClick={ Props.close }>Close Modal</button>
      </Modal>
    </div>
  );
};

export default HowToModal;