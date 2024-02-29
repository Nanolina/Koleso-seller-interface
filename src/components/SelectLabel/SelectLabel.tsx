import React from 'react';
import { Label } from '../../ui/Label/Label';
import { saveValuesToLocalStorage } from '../../utils';
import { Select } from '../Select/Select';
import { ISelectLabelProps } from '../types';
import styles from './SelectLabel.module.css';

export const SelectLabel: React.FC<ISelectLabelProps> = React.memo(
  ({
    id,
    name,
    label,
    options,
    keyInLocalStorage,
    value,
    setFieldValue,
    onChange,
    firstText,
    translationType,
    extraText,
    isNumber = false,
    required,
  }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const eventValue = isNumber ? parseFloat(e.target.value) || 0 : e.target.value;

      if (setFieldValue && !keyInLocalStorage) {
        setFieldValue(name, eventValue);
      } else if (keyInLocalStorage && setFieldValue) {
        return saveValuesToLocalStorage(
          keyInLocalStorage,
          name,
          eventValue,
          setFieldValue
        );
      } else if (onChange) {
        onChange(eventValue);
      }

      return;
    };

    return (
      <div className={styles.container}>
        <Label id={id} text={label} required={required} />

        <Select
          id={id}
          name={name}
          options={options}
          value={value}
          onChange={handleChange}
          translationType={translationType}
          firstText={firstText}
        />

        {extraText && <div className={styles.extraText}>{extraText}</div>}
      </div>
    );
  }
);
