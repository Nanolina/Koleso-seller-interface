import React from 'react';
import { Label } from '../../ui/Label/Label';
import { Textarea } from '../../ui/Textarea/Textarea';
import { ValidationError } from '../../ui/ValidationError/ValidationError';
import { ITextareaLabelProps } from '../types';

export const TextareaLabel: React.FC<ITextareaLabelProps> = React.memo(
  ({ label, id, name, value, onChange, rows, required, errors, touched }) => {
    return (
      <div className="elementWithLabelContainer">
        <Label id={id} text={label} required={required} />
        <Textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
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
