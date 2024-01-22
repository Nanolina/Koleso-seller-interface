import React from 'react';
import { IButtonProps } from '../types';
import styles from './Button.module.css';

export const Button: React.FC<IButtonProps> = React.memo(
  ({
    text,
    onClick,
    type = 'submit',
    disabled = false,
    backgroundColor = 'var(--orange)',
    border = false,
    textColor = 'white',
    isBold = true,
    hasShadow = false,
  }) => {
    const buttonStyle = {
      backgroundColor: disabled ? 'var(--light-gray)' : backgroundColor,
      border: border ? `1px solid var(--main)` : 'none',
      boxShadow: hasShadow ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
    };

    const textStyle = {
      color: disabled ? 'var(--dark-gray)' : textColor,
      fontWeight: isBold ? 'bold' : 'normal',
    };

    return (
      <button
        className={styles.container}
        onClick={onClick}
        type={type}
        disabled={disabled}
        style={buttonStyle}
      >
        <div style={textStyle}>{text}</div>
      </button>
    );
  }
);
