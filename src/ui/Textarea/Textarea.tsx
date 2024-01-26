import React from 'react';
import { ITextareaProps } from '../types';
import styles from './Textarea.module.css';

export const Textarea: React.FC<ITextareaProps> = React.memo(
  ({ id, name, value, onChange, rows, required, hasError = false }) => {
    return (
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
        className={hasError ? styles.error : styles.textarea}
      />
    );
  }
);
