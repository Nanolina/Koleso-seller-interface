import { Field } from 'formik';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IInputProps } from '../types';
import styles from './Input.module.css';

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
  }) => {
    // Add eye to input for password
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const inputType = type === 'password' && showPassword ? 'text' : type;
    const isVisiblePassword = type === 'password' && showPassword;
    const isNotVisiblePassword = type === 'password' && !showPassword;

    return (
      <div className={styles.inputContainer}>
        <Field
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          as="input"
          type={inputType}
          placeholder={placeholder}
          required={required}
          className={hasError ? styles.error : styles.input}
        />
        {isNotVisiblePassword && (
          <FaEye
            onClick={togglePasswordVisibility}
            className={styles.eyeIcon}
          />
        )}

        {isVisiblePassword && (
          <FaEyeSlash
            onClick={togglePasswordVisibility}
            className={styles.eyeIcon}
          />
        )}
      </div>
    );
  }
);
