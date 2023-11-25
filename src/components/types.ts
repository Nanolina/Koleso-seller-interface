import { HTMLInputTypeAttribute } from 'react';

interface IOption {
  id: string;
  title: string;
}

export interface ISelectProps {
  label?: string;
  id: string;
  name: string;
  options: IOption[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value: string;
  firstText: string;
  isHalfWidth?: boolean;
}

export interface IInputLabelProps {
  label: string;
  id: string;
  inputType?: HTMLInputTypeAttribute;
  isHalfWidth?: boolean;
  required?: boolean;
}

export interface ISelectLabelProps {
  id: string;
  name: string;
  label: string;
  options: any;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value: string;
  firstText: string;
  isHalfWidth?: boolean;
  required?: boolean;
}
