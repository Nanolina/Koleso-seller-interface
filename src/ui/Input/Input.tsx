import React from 'react';
import { IInputProps } from '../types';
import styles from './Input.module.css';

export const Input: React.FC<IInputProps> = React.memo(
  ({
    id,
    name,
    type,
    placeholder,
    required,
    value,
    onChange,
    isSmallWidth,
  }) => {
    return (
      <input
        id={id}
        name={name}
        type={type || 'text'}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={isSmallWidth ? styles.smallWidth : styles.input}
      />
    );
  }
);
