import styled, { keyframes } from 'styled-components';

const ModalWrapper = styled.div``;

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const ModalDialog = styled.dialog`
  border: none;
  padding: 0;
  border-radius: 6px;
  background-color: violetred;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
  opacity: 0;
  animation: ${appear} 0.25s ease-in forwards;
`;

const ModalContent = styled.div`
  padding: 2rem;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 25px;
  right: 25px;
`;

export { CloseButton, ModalDialog, ModalContent };
