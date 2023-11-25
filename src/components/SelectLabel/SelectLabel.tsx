import React from 'react';
import { Label } from '../../ui/Label/Label';
import { Select } from '../Select/Select';
import { ISelectLabelProps } from '../types';
import styles from './SelectLabel.module.css';

export const SelectLabel: React.FC<ISelectLabelProps> = React.memo(
  ({
    id,
    name,
    label,
    options,
    onChange,
    value,
    firstText,
    translationType,
    isHalfWidth,
    required,
  }) => {
    return (
      <div className={styles.container}>
        <Label id={id} text={label} required={required} />
        <Select
          id={id}
          name={name}
          options={options}
          onChange={onChange}
          value={value}
          translationType={translationType}
          firstText={firstText}
          isHalfWidth={isHalfWidth}
        />
      </div>
    );
  }
);
