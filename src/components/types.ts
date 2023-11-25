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
  translationType: string;
  firstText: string;
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
  value: string;
  firstText: string;
  translationType: string;
  required?: boolean;
}
