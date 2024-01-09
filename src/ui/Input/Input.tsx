import React from 'react';
import { IInputProps } from '../types';
import styles from './Input.module.css';
import { Field } from 'formik';

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
      <Field
        id={id}
        name={name}
        as="input"
        type={type || 'text'}
        placeholder={placeholder}
        required={required}
        className={isSmallWidth ? styles.smallWidth : styles.input}
      />
    );
  }
);
