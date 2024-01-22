import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import {
  handleChangeEmail,
  handleResendEmailConfirmation,
} from '../../../../redux/thunks/user';
import { IChangeEmailData } from '../../../../services/types/request';

export const useEmailForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  // Get data from redux
  const { email, activationLinkId } = useSelector(
    (state: IRootState) => state.user
  );

  // Initial values
  const initialValues = {
    email,
  };

  // Schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t('auth.validation.invalidEmail'))
      .required(t('auth.validation.emailRequired')),
  });

  // Change email
  const handleSubmitChangeEmail = async (values: IChangeEmailData) => {
    dispatch(handleChangeEmail({ email: values.email }));
  };

  // Resend email confirmation
  const handleSubmitResendEmailConfirmation = async () => {
    dispatch(handleResendEmailConfirmation({ email, activationLinkId }));
  };

  return {
    initialValues,
    validationSchema,
    handleSubmitChangeEmail,
    handleSubmitResendEmailConfirmation,
  };
};
