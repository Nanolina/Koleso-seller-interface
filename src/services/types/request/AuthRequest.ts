export interface ISignupData {
  email: string;
  phone: string;
  password: string;
  repeatedPassword: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IChangeEmailData {
  email: string;
}

export interface ISetNewPasswordData {
  password: string;
  repeatedPassword: string;
}

export interface ISetNewPasswordDataForService {
  userId: string;
  password: string;
  repeatedPassword: string;
}
