import classNames from 'classnames';
import { Field } from 'formik';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ValidationError } from '../ValidationError/ValidationError';
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
    errors,
    touched,
    isInputAbsolute = false,
    isErrorSmall = false,
    maxLength,
  }) => {
    // Add eye to input for password
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const inputType = type === 'password' && showPassword ? 'text' : type;
    const isVisiblePassword = type === 'password' && showPassword;
    const isNotVisiblePassword = type === 'password' && !showPassword;

    const inputClass = classNames({
      [styles.error]: hasError,
      [styles.inputAbsolute]: isInputAbsolute,
      [styles.input]: !isInputAbsolute && !hasError,
    });

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
          className={inputClass}
          maxLength={maxLength}
        />
        {errors[name] && touched[name] && (
          <ValidationError error={errors[name]} isErrorSmall={isErrorSmall} />
        )}
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
