import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import { CloseButton, ModalDialog, ModalContent } from './Modal.styled';

export class Modal extends React.Component {
  ref = createRef();
  refContent = createRef();

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, false);
    window.addEventListener('keydown', this.handleKeyUp, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
    window.addEventListener('keydown', this.handleKeyUp, false);
  }

  closeDialog = () => this.ref.current.close();

  openDialog = () => this.ref.current.showModal();

  handleOutsideClick = e => {
    if (!this.refContent.current.contains(e.target)) {
      console.log(this.refContent.current, e.target);
      //this.props.onClose();
      //document.removeEventListener('click', this.handleOutsideClick, false);
    }
  };

  handleKeyUp = e => {
    const { onClose } = this.props;
    const keys = {
      27() {
        e.preventDefault();
        onClose();
        window.removeEventListener('keydown', this.handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  };

  componentDidUpdate({ show }, prevState) {
    console.log(show, this.props.show);

    if (show !== this.props.show) {
      if (this.props.show) {
        this.openDialog();
      } else {
        this.closeDialog();
      }
    }
  }

  render() {
    const { children, onClose, show } = this.props;
    return (
      <ModalDialog innerRef={this.ref}>
        <ModalContent innerRef={this.refContent} className="modal-content">
          <CloseButton type="button" onClick={onClose}>
            close
          </CloseButton>
          {children}
        </ModalContent>
      </ModalDialog>
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
