import React from 'react';
import { ISelectProps } from '../types';
import styles from './Select.module.css';

export const Select: React.FC<ISelectProps> = React.memo(
  ({ id, name, options, onChange, value, firstText, isHalfWidth }) => {
    return (
      <select
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        className={isHalfWidth ? styles.halfWidth : styles.select}
      >
        {firstText && <option value="">{firstText}</option>}
        {options.map((option: any) => {
          const value = option.id || option.value || option;

          return (
            <option key={value} value={value}>
              {option.name || option}
            </option>
          );
        })}
      </select>
    );
  }
);
