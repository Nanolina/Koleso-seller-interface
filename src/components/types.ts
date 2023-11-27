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
}

export interface ISelectLabelProps {
  id: string;
  name: string;
  label: string;
  options: any;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value?: any;
  firstText: string;
  translationType?: string;
  required?: boolean;
}
