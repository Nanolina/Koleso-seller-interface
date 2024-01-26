import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

export interface ISelectProps {
  label?: string;
  id?: string;
  name?: string;
  options: string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value?: string;
  translationType?: string;
  firstText: string;
  isHalfWidth?: boolean;
}

export interface IInputLabelProps {
  label: string;
  id: string;
  name: string;
  inputType?: HTMLInputTypeAttribute;
  required?: boolean;
  extraText?: string;
  value?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  errors?: any;
  touched?: any;
}

export interface IInputUploadLabelProps {
  label: string;
  id: string;
  name: string;
  required?: boolean;
  value?: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  acceptFiles: string;
  multiple?: boolean;
}

export interface ISelectLabelProps {
  id: string;
  name: string;
  label: string;
  options: any;
  value?: any;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  firstText: string;
  translationType?: string;
  extraText?: string;
  required?: boolean;
  isFullWidth?: boolean;
}

export interface ITextareaLabelProps {
  label: string;
  id: string;
  name: string;
  value?: any;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  rows?: number;
  required?: boolean;
  errors?: any;
  touched?: any;
}

export interface ICheckboxWithLabelProps {
  label: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
}

export interface ICheckboxOption {
  name: string;
  label: string;
}

export interface ICheckboxContainerProps {
  options: ICheckboxOption[];
  type?: string;
}

export interface IMessageBox {
  errorMessage?: string;
  successMessage?: string;
}
