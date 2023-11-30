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
    extra,
    required,
    isFullWidth,
  }) => {
    return (
      <div className={isFullWidth ? styles.fullWidth : styles.container}>
        {extra ? (
          <>
            <Label id={id} text={label} required={required} />
            <div className={styles.extraText}>{extra}</div>
          </>
        ) : (
          <Label id={id} text={label} required={required} />
        )}

        <Select
          id={id}
          name={name}
          options={options}
          onChange={onChange}
          value={value}
          translationType={translationType}
          firstText={firstText}
        />
      </div>
    );
  }
);
