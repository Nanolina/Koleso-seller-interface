import { FormikErrors, FormikProps, FormikTouched } from 'formik';
import { HTMLInputTypeAttribute, ReactElement } from 'react';
import { SetStateAction } from './../types';

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
  tooltipText?: string;
  children?: any;
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
  required?: boolean;
  hasError?: boolean;
  value?: string | number;
  onChange?: any;
  errors?: any;
  touched?: any;
  isInputAbsolute?: boolean;
  isErrorSmall?: boolean;
  maxLength?: number;
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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  acceptFiles: string;
  multiple?: boolean;
}

export interface IValidationErrorProps {
  error: string | undefined;
  isErrorSmall?: boolean;
}

export interface IAddItemButtonProps {
  text: string;
  onClick: () => void;
}

export interface IContainerProps {
  isSmallContainer?: boolean;
  redirectToItemsPage?: any;
  onClick?: any;
  children: any;
}

export interface ITabProps {
  activeTab: string;
  setActiveTab: SetStateAction<string>;
  tabName: string;
  text: string;
  icon: ReactElement;
}

export interface IRecoverIconProps {
  tooltipText?: string;
  onClick: any;
}

export interface IEmailProps {
  value: string;
  setFieldValue: FormikProps<any>['setFieldValue'];
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}
