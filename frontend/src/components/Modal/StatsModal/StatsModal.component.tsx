import { FC,} from 'react';
import React from 'react';
import Modal from '../Modal.component';

interface Props {
  isShowing: boolean
  close: any
}

const StatsModal: FC<Props> = (Props) => {
  return (
    <div className='modal'>
      <Modal isShowing={Props.isShowing}>
        <h2>Stats</h2>
        <p> This is a pararaph on stats</p>
        <button onClick={ Props.close }>Close Modal</button>
      </Modal>
    </div>
  );
};

export default StatsModal;