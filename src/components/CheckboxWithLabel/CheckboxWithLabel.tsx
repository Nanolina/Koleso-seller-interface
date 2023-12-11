import React from 'react';
import { ICheckboxWithLabelProps } from '../types';
import styles from './CheckboxWithLabel.module.css';

export const CheckboxWithLabel: React.FC<ICheckboxWithLabelProps> = React.memo(
  ({ label, checked, onChange, name }) => {
    return (
      <div className={styles.container}>
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  }
);
