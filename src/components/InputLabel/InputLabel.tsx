import React from 'react';
import { Input } from '../../ui/Input/Input';
import { Label } from '../../ui/Label/Label';
import { ValidationError } from '../../ui/ValidationError/ValidationError';
import { IInputLabelProps } from '../types';
import styles from './InputLabel.module.css';

export const InputLabel: React.FC<IInputLabelProps> = React.memo(
  ({
    label,
    id,
    name,
    inputType,
    required,
    extraText,
    value,
    onChange,
    placeholder,
    errors,
    touched,
  }) => {
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
        />
        {extraText && <i className={styles.extraText}>{extraText}</i>}
        {errors[name] && touched[name] && (
          <ValidationError error={errors[name]} />
        )}
      </div>
    );
  }
);
