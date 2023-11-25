import { HTMLInputTypeAttribute } from 'react';

export interface ITitleProps {
  text: string;
}

export interface IButtonProps {
  text: string;
  onClick: () => void;
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
  id: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  isHalfWidth?: boolean;
  required?: boolean;
}
