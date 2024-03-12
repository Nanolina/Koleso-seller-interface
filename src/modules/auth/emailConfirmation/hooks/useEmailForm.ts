import { useState } from 'react';
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

  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);

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
    dispatch(handleChangeEmail(values.email));
  };

  // Resend email confirmation
  const handleSubmitResendEmailConfirmation = async () => {
    setIsButtonDisabled(true);
    setTimer(120); // 2 min = 120 sec

    dispatch(handleResendEmailConfirmation({ email, activationLinkId }));

    setTimeout(() => setIsButtonDisabled(false), 120000); // 120000 milliseconds = 2 min
  };

  return {
    isButtonDisabled,
    timer,
    setTimer,
    initialValues,
    validationSchema,
    handleSubmitChangeEmail,
    handleSubmitResendEmailConfirmation,
  };
};
