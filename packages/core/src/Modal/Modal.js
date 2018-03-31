import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import { ModalWrapper, ModalDialog, ModalContent } from './Modal.styled';

export class Modal extends React.Component {
  ref = createRef();

  componentDidUpdate({ show }, prevState) {
    debugger; //eslint-disable-line
    if (show) {
      this.openDialog();
    } else {
      this.closeDialog();
    }
  }

  closeDialog = () => this.ref.current.close();

  openDialog = () => this.ref.current.showModal();

  render() {
    const { children, onClose } = this.props;
    return (
      <div className="wrapper">
        <dialog ref={this.ref}>
          <button type="button" onClick={onClose}>
            close
          </button>
          {children}
        </dialog>
      </div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func
};

Modal.defaultProps = {
  show: false
};

export default Modal;
