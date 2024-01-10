import { Field } from 'formik';
import React from 'react';
import { IInputProps } from '../types';
import styles from './Input.module.css';
import classNames from 'classnames';

export const Input: React.FC<IInputProps> = React.memo(
  ({
    id,
    name,
    type = 'text',
    placeholder,
    required,
    value,
    onChange,
    hasError = false,
    isSmallWidth = false,
  }) => {
      const inputClassNames = classNames({
        [styles.input]: !isSmallWidth,
        [styles.smallWidth]: isSmallWidth,
        [styles.error]: hasError,
      });

    return (
      <Field
        id={id}
        name={name}
        as="input"
        type={type || 'text'}
        placeholder={placeholder}
        required={required}
        className={inputClassNames}
      />
    );
  }
);
