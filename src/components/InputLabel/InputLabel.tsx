import React from 'react';
import { Input } from '../../ui/Input/Input';
import { Label } from '../../ui/Label/Label';
import { IInputLabelProps } from '../types';
import styles from './InputLabel.module.css';

export const InputLabel: React.FC<IInputLabelProps> = React.memo(
  ({ label, id, name, inputType, required, extraText, value, onChange, placeholder }) => {
    return (
      <div className={styles.container}>
        <Label id={id} text={label} required={required} />
        <Input
          id={id}
          name={name}
          type={inputType}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {extraText && <i className={styles.extraText}>{extraText}</i>}
      </div>
    );
  }
);
