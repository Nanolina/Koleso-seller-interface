import { HTMLInputTypeAttribute } from 'react';

export interface ISelectProps {
  label?: string;
  id: string;
  name: string;
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
  onChange: React.ChangeEventHandler<HTMLInputElement>;
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
  required?: boolean;
}
