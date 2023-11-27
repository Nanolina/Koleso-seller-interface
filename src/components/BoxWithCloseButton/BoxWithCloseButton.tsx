import React from 'react';
import { IoMdClose } from 'react-icons/io';
import styles from './BoxWithCloseButton.module.css';

export const BoxWithCloseButton: React.FC<any> = React.memo(
  ({ onClick, children }) => {
    return (
      <div className={styles.container}>
        <div className={styles.children}>{children}</div>
        <IoMdClose
          size={12}
          color="var(--dark-gray)"
          className={styles.iconClose}
          onClick={onClick}
        />
      </div>
    );
  }
);
