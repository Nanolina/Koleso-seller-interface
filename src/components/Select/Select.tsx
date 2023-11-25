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
        className={isHalfWidth ? styles.halfSelect : styles.select}
      >
        <option value="">{firstText}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.title}
          </option>
        ))}
      </select>
    );
  }
);
