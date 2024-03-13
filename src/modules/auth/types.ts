import { ObjectSchema } from 'yup';
import { LanguageType } from '../../types';

export interface IUserState {
  id: string;
  email: string;
  phone: string;
  activationLinkId: string;
  isActive: boolean;
  isVerifiedEmail: boolean;
  isSeller: boolean;
  language: LanguageType;
  success: string;
  loading: boolean;
  error: any;
}

export interface IAuthPayload {
  id: string;
  email: string;
  phone: string;
  activationLinkId: string;
  isActive: boolean;
  isVerifiedEmail: boolean;
  roles: string[];
}

export interface ISetNewPasswordPayload {
  isActive: boolean;
}

export interface IEmailPayload {
  email: string;
}

type OnSubmitType = (values: IEmailPayload) => void | Promise<void>;

export interface IChangeEmailFormProps {
  initialValues: IEmailPayload;
  validationSchema: ObjectSchema<IEmailPayload>;
  onSubmit: OnSubmitType;
}

export interface ISetNewPasswordFormProps {
  userId: string;
}

export interface IResendEmailButtonProps {
  isButtonDisabled: boolean;
  timer: number;
  onClick: () => void;
}

export interface ITimerTextProps {
  timer: number;
}
