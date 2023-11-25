import React from 'react';
import { Input } from '../../ui/Input/Input';
import { Label } from '../../ui/Label/Label';
import { IInputLabelProps } from '../types';
import styles from './InputLabel.module.css';

export const InputLabel: React.FC<IInputLabelProps> = React.memo(
  ({ label, id, inputType, isHalfWidth, required }) => {
    return (
      <div className={styles.container}>
        <Label id={id} text={label} required={required} />
        <Input
          id={id}
          type={inputType}
          required={required}
          isHalfWidth={isHalfWidth}
        />
      </div>
    );
  }
);
