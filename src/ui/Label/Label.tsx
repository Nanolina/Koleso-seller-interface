import React from 'react';
import { ILabelProps } from '../types';

export const Label: React.FC<ILabelProps> = React.memo(
  ({ id, text, required }) => {
    return <label htmlFor={id}>{required ? `${text}*` : text}</label>;
  }
);
