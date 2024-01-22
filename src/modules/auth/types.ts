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

interface IEmail {
  email: string;
}

type OnSubmitType = (values: IEmail) => void | Promise<void>;

export interface IChangeEmailFormProps {
  initialValues: IEmail;
  validationSchema: ObjectSchema<IEmail>;
  onSubmit: OnSubmitType;
}
