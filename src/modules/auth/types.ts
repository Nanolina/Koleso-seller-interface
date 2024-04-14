import { ObjectSchema } from 'yup';
import { LanguageType, RoleType } from '../../types';

export interface IUserState {
  id: string;
  email: string;
  phone: string;
  isActive: boolean;
  isVerifiedEmail: boolean;
  isSeller: boolean;
  language: LanguageType;
  organizationId: string;
  success: string;
  loading: boolean;
  error: any;
}

export interface IAuthPayload {
  id: string;
  email: string;
  phone: string;
  isActive: boolean;
  isVerifiedEmail: boolean;
  role: RoleType;
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

export interface IResendEmailButtonProps {
  isButtonDisabled: boolean;
  timer: number;
  onClick: () => void;
}

export interface ITimerTextProps {
  timer: number;
}

export interface IVerifyCodePayload {
  isVerifiedEmail: boolean;
}
