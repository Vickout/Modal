import React from 'react';
import { FiX } from 'react-icons/fi';

import { Overlay, Container, Button } from './styles';

interface ModalProps {
  closeModal: () => void;
  data: {
    text: string;
    color: string;
    image: string;
  };
}

const Modal: React.FC<ModalProps> = ({ closeModal, data }) => {
  return (
    <Overlay>
      <Container colorText={data.color}>
        <img src={data.image} alt="Lixeira" />
        <strong>{data.text}</strong>
        <Button onClick={closeModal}>
          <FiX size={24} color="#000" />
        </Button>
      </Container>
    </Overlay>
  );
};

export default Modal;
