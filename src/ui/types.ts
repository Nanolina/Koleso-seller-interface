import { HTMLInputTypeAttribute } from 'react';

export interface ITitleProps {
  text: string;
}

export interface IButtonProps {
  text: any;
  onClick?: any;
  type?: 'submit' | 'button' | 'reset' | undefined;
  disabled?: boolean;
  backgroundColor?: string;
  border?: boolean;
  textColor?: string;
  isBold?: boolean;
  hasShadow?: boolean;
  children?: any;
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
  hasError?: boolean;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  isSmallWidth?: boolean;
}

export interface ITextareaProps {
  id?: string;
  name?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  rows?: number;
  required?: boolean;
  hasError?: boolean;
}

export interface IInputUploadProps {
  id?: string;
  name?: string;
  required?: boolean;
  value?: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  acceptFiles: string;
  multiple?: boolean;
}

export interface IValidationErrorProps {
  error: string | undefined;
}
