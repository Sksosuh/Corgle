import { FC,} from 'react';
import React from 'react';

const ModalBody: FC = (Props) => {
  return (
  <div className="modal-body">
      { Props.children }
    </div>
  );
};

export default ModalBody;