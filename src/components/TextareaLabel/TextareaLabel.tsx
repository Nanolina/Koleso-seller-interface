import React from 'react';
import { Label } from '../../ui/Label/Label';
import { Textarea } from '../../ui/Textarea/Textarea';
import { ValidationError } from '../../ui/ValidationError/ValidationError';
import { saveValuesToLocalStorage } from '../../utils';
import { ITextareaLabelProps } from '../types';

export const TextareaLabel: React.FC<ITextareaLabelProps> = React.memo(
  ({
    label,
    id,
    keyInLocalStorage,
    name,
    value,
    setFieldValue,
    onChange,
    rows,
    required,
    errors,
    touched,
  }) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const eventValue = e.target.value;

      // change setFieldValue as required field
      if (setFieldValue && !keyInLocalStorage) {
        setFieldValue(name, eventValue);
      } else if (keyInLocalStorage && setFieldValue) {
        return saveValuesToLocalStorage(
          keyInLocalStorage,
          name,
          eventValue,
          setFieldValue
        );
      }

      return;
    };

    return (
      <div className="elementWithLabelContainer">
        <Label id={id} text={label} required={required} />
        <Textarea
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          rows={rows}
          required={required}
          hasError={errors[name] && touched[name]}
        />
        {errors[name] && touched[name] && (
          <ValidationError error={errors[name]} />
        )}
      </div>
    );
  }
);
