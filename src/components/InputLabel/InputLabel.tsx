import React from 'react';
import { Input } from '../../ui/Input/Input';
import { Label } from '../../ui/Label/Label';
import { IInputLabelProps } from '../types';
import styles from './InputLabel.module.css';

export const InputLabel: React.FC<IInputLabelProps> = React.memo(
  ({ label, id, name, inputType, required, extraText }) => {
    return (
      <div className={styles.container}>
        <Label id={id} text={label} required={required} />
        <Input
          id={id}
          name={name}
          type={inputType}
          required={required}
        />
        {extraText && <i className={styles.extraText}>{extraText}</i>}
      </div>
    );
  }
);
