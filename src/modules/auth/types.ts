import { ObjectSchema } from 'yup';

export interface IUserState {
  id: string;
  email: string;
  activationLinkId: string;
  isActive: boolean;
  isVerifiedEmail: boolean;
  isAuth: boolean;
  loading: boolean;
  error: any;
}

export interface IAuthPayload {
  id: string;
  email: string;
  activationLinkId: string;
  isActive: boolean;
  isVerifiedEmail: boolean;
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
