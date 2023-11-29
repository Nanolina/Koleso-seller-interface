import React from 'react';
import { Label } from '../../ui/Label/Label';
import { Textarea } from '../../ui/Textarea/Textarea';
import { ITextareaLabelProps } from '../types';
import styles from './TextareaLabel.module.css';

export const TextareaLabel: React.FC<ITextareaLabelProps> = React.memo(
  ({ label, id, name, value, onChange, rows, required }) => {
    return (
      <div className={styles.container}>
        <Label id={id} text={label} required={required} />
        <Textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          required={required}
        />
      </div>
    );
  }
);
