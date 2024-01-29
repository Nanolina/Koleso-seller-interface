import React from 'react';
import { IModalProps } from '../types';
import styles from './Modal.module.css';

export const Modal: React.FC<IModalProps> = React.memo(
  ({ isOpen, onClose, children, isBig = true }) => {
    // Function for closing the modal window when clicking on the overlay
    const handleOverlayClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      if (event.currentTarget === event.target) {
        onClose();
      }
    };

    if (!isOpen) {
      return null;
    }

    return (
      <div className={styles.modalOverlay} onClick={handleOverlayClick}>
        <div className={isBig ? styles.modalBigContent : styles.modalContent}>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
          {children}
        </div>
      </div>
    );
  }
);
