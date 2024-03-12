import { FormikProps } from 'formik';
import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

export interface ISelectProps {
  label?: string;
  id?: string;
  name?: string;
  options: any;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value?: string;
  firstText?: string;
  isHalfWidth?: boolean;
}

export interface IInputLabelProps {
  label: string;
  id: string;
  keyInLocalStorage?: string;
  name: string;
  inputType?: HTMLInputTypeAttribute;
  required?: boolean;
  extraText?: string;
  value?: any;
  onChange?: any;
  setFieldValue?: FormikProps<any>['setFieldValue'];
  placeholder?: string;
  errors?: any;
  touched?: any;
}

export interface IInputUploadLabelProps {
  label: string;
  id: string;
  name: string;
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  acceptFiles: string;
  multiple?: boolean;
}

export interface ISelectLabelProps {
  id: string;
  name: string;
  label: string;
  options: any;
  keyInLocalStorage?: string;
  value?: any;
  setFieldValue?: FormikProps<any>['setFieldValue'];
  onChange?: any;
  firstText?: string;
  extraText?: string;
  isNumber?: boolean;
  required?: boolean;
}

export interface ITextareaLabelProps {
  label: string;
  id: string;
  keyInLocalStorage?: string;
  name: string;
  value?: any;
  setFieldValue?: FormikProps<any>['setFieldValue'];
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

export interface IFilterProps {
  text: string;
  checked: boolean;
  onChange: any;
}

export interface IPhoneProps {
  valuesPhone: string;
  errors: string | undefined;
  setFieldValue: FormikProps<any>['setFieldValue'];
}
