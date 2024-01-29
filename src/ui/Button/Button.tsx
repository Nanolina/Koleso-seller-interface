import React from 'react';
import { IButtonProps } from '../types';
import styles from './Button.module.css';

export const Button: React.FC<IButtonProps> = React.memo(
  ({
    text,
    onClick,
    type = 'submit',
    disabled = false,
    backgroundColor = 'var(--main)',
    border = false,
    textColor = 'white',
    isBold = true,
    hasShadow = false,
    children,
  }) => {
    const buttonStyle = {
      backgroundColor: disabled ? 'var(--light-gray)' : backgroundColor,
      border: border ? `1px solid var(--main)` : 'none',
      boxShadow: hasShadow ? '2px 2px 5px rgba(0, 0, 0, 0.5)' : 'none',
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
        {children}
      </button>
    );
  }
);
