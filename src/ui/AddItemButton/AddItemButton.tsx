import React from 'react';
import { Button } from '../Button/Button';
import { IAddItemButtonProps } from '../types';
import styles from './AddItemButton.module.css';

export const AddItemButton: React.FC<IAddItemButtonProps> = React.memo(
  ({ text, onClick }) => {
    return (
      <div className={styles.container}>
        <Button
          text={text}
          onClick={onClick}
          backgroundColor="white"
          textColor="var(--dark-main)"
          border={false}
          isBold={false}
          hasShadow
        />
      </div>
    );
  }
);
