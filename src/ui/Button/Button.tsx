import React from 'react';
import { Tooltip } from 'react-tooltip';
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
    tooltipText,
    isLink = false,
    children,
  }) => {
    const buttonStyle = isLink
      ? {
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          cursor: disabled ? 'default' : 'pointer',
        }
      : {
          backgroundColor: disabled ? 'var(--light-gray)' : backgroundColor,
          border: border ? `1px solid var(--main)` : 'none',
          boxShadow: hasShadow ? '2px 2px 5px rgba(0, 0, 0, 0.5)' : 'none',
        };

    const textStyle = isLink
      ? {
          color: disabled ? 'var(--dark-gray)' : 'var(--dark-blue)',
          fontWeight: 'normal',
          textDecoration: disabled ? 'none' : 'underline',
        }
      : {
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
        data-tooltip-id="tooltip"
        data-tooltip-html={tooltipText}
      >
        <Tooltip id="tooltip" />
        <div style={textStyle}>{text}</div>
        {children}
      </button>
    );
  }
);
