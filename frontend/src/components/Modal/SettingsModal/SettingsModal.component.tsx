import { FC,} from 'react';
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
        <p> This is a pararaph on settings</p>
        <button onClick={ Props.close }>Close Modal</button>
      </Modal>
    </div>
  );
};

export default SettingsModal;