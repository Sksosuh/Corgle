import { FC,} from 'react';
import React from 'react';
import './Modal.scss';

interface Props {
  isShowing: boolean
  header: string
}

const Modal: FC<Props> = (Props) => {
  return (
      <div className='modal'>
        <div className='modalDialog'>
          <div className='modalChildren'>
            { Props.children }
          </div>
        </div>
      </div>
  );
};

export default Modal;