import React from 'react';
import { Modal } from '@mui/material';
import CustomButton from './CustomButton';
import tickcircle from '../assets/tick-circle.svg';

const SuccessModal = ({ open, onClose, title, desc }) => (
  <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="success-modal-title"
    aria-describedby="success-modal-description"
  >
    <div
      className="bg-white font-manrope rounded-3xl border mx-auto p-9
                  w-[90%] max-w-[400px] md:max-w-[500px] 
                  h-auto max-h-[90vh] overflow-y-auto mt-10"
    >
      <div className="mx-auto flex flex-col space-y-6 justify-center items-center text-center">
        <div>
          <img src={tickcircle} alt="tick-circle" />
        </div>
        <div>
          <h2 className="text-[24px] font-bold mb-4">{title}</h2>
          <p>{desc}</p>
        </div>
        <CustomButton onClick={onClose} label="Continue" />
      </div>
    </div>
  </Modal>
);

export default SuccessModal;
