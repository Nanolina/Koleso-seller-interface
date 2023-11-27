import { HTMLInputTypeAttribute } from 'react';

export interface ITitleProps {
  text: string;
}

export interface IButtonProps {
  text: string;
  onClick: any;
  backgroundColor?: string;
  border?: boolean;
  textColor?: string;
  isBold?: boolean;
  hasShadow?: boolean;
}

export interface ILabelProps {
  id: string;
  text: string;
  required?: boolean;
}

export interface IInputProps {
  id?: string;
  name?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  isSmallWidth?: boolean;
}
