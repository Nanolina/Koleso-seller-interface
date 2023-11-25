import React from 'react';
import { IInputProps } from '../types';
import styles from './Input.module.css';

export const Input: React.FC<IInputProps> = React.memo(
  ({ id, name, type, placeholder, isHalfWidth, required }) => {
    return (
      <input
        id={id}
        name={name}
        type={type || 'text'}
        placeholder={placeholder}
        required={required}
        className={isHalfWidth ? styles.halfInput : styles.input}
      />
    );
  }
);
