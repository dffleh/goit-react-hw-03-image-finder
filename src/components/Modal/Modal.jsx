import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import { Backdrop, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscClick);
  }

  onEscClick = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, alt } = this.props;
    return createPortal(
      <Backdrop onClick={this.onBackdropClick}>
        <ModalImg>
          <img src={largeImageURL} alt={alt} />
        </ModalImg>
      </Backdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
