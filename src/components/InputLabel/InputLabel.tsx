import React from 'react';
import { Input } from '../../ui/Input/Input';
import { Label } from '../../ui/Label/Label';
import { ValidationError } from '../../ui/ValidationError/ValidationError';
import { saveValuesToLocalStorage } from '../../utils';
import { IInputLabelProps } from '../types';
import styles from './InputLabel.module.css';

export const InputLabel: React.FC<IInputLabelProps> = React.memo(
  ({
    label,
    id,
    keyInLocalStorage,
    name,
    inputType,
    required,
    extraText,
    value,
    onChange,
    setFieldValue,
    placeholder,
    errors,
    touched,
  }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const eventValue =
        inputType === 'number' ? parseFloat(e.target.value) : e.target.value;

      if (setFieldValue && !keyInLocalStorage) {
        // change setFieldValue as required field
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
      <div className="elementWithLabelContainer">
        <Label id={id} text={label} required={required} />
        <Input
          id={id}
          name={name}
          type={inputType}
          required={required}
          hasError={errors[name] && touched[name]}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        {extraText && <i className={styles.extraText}>{extraText}</i>}
        {errors[name] && touched[name] && (
          <ValidationError error={errors[name]} />
        )}
      </div>
    );
  }
);
