import { FC,} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Modal from '../Modal.component';

interface Props {
  isShowing: boolean
  close: any
}

const DescriptionModal: FC<Props> = (Props) => {
  return (
    <div className='modal'>
      <Modal isShowing={Props.isShowing}>
      <div className="header">
          <div></div>
          <h2>Description</h2>
          <button onClick={ Props.close }><FontAwesomeIcon icon={'times'}/></button>
        </div>
          <p>Description goes here</p>
      </Modal>
    </div>
  );
};

export default DescriptionModal;