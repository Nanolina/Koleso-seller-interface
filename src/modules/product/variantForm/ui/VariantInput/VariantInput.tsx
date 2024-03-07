import React from 'react';
import { Input } from '../../../../../ui/Input/Input';
import { IVariantInputProps } from '../../types';

export const VariantInput: React.FC<IVariantInputProps> = React.memo(
  ({ variant, name, type, onChange, errors, touched }) => (
    <Input
      id={`${variant[name]}-${variant.id}`}
      name={name}
      type={type}
      value={variant[name]}
      onChange={onChange}
      errors={errors}
      touched={touched}
      required
      isInputAbsolute
      isErrorSmall
    />
  )
);
