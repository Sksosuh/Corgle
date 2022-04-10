import { FC,} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Modal from '../Modal.component';

interface Props {
  isShowing: boolean
  header: string
  close: any
}

const SettingsModal: FC<Props> = (Props) => {
  return (
    <div className='modal'>
      <Modal isShowing={Props.isShowing}>
        <h2>Settings</h2>
        <p> Settings are currently a work in progress, please return at a later date!</p>
        <button onClick={ Props.close }><FontAwesomeIcon icon={'times'}/></button>
      </Modal>
    </div>
  );
};

export default SettingsModal;