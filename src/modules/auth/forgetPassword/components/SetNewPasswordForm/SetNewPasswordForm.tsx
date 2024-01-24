import { Form, Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import 'react-phone-input-2/lib/style.css';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { ISetNewPasswordFormProps } from '../../..';
import { InputLabel } from '../../../../../components/InputLabel/InputLabel';
import { Loader } from '../../../../../components/Loader/Loader';
import { MessageBox } from '../../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../../redux/rootReducer';
import { AppDispatch } from '../../../../../redux/store';
import { handleSetNewPassword } from '../../../../../redux/thunks/user';
import {
  ISetNewPasswordData,
  ISetNewPasswordDataForService,
} from '../../../../../services/types/request';
import { Button } from '../../../../../ui/Button/Button';
import styles from './SetNewPasswordForm.module.css';

YupPassword(Yup);

export const SetNewPasswordForm: React.FC<ISetNewPasswordFormProps> =
  React.memo(({ userId }) => {
    const { t } = useTranslation();

    const dispatch = useDispatch<AppDispatch>();

    const { loading, error } = useSelector((state: IRootState) => state.user);

    // Initial values
    const initialValues = {
      password: '',
      repeatedPassword: '',
    };

    // Schema
    const validationSchema = Yup.object({
      password: Yup.string()
        .min(8, t('auth.validation.passwordMin'))
        .minLowercase(1, t('auth.validation.passwordLowerCase'))
        .minUppercase(1, t('auth.validation.passwordUpperCase'))
        .minNumbers(1, t('auth.validation.passwordNumbers'))
        .minSymbols(1, t('auth.validation.passwordSymbols'))
        .required(t('auth.validation.passwordRequired')),
      repeatedPassword: Yup.string()
        .oneOf([Yup.ref('password')], t('auth.validation.passwordsMustMatch'))
        .required(t('auth.validation.passwordRequired')),
    });

    const handleSubmit = async (values: ISetNewPasswordData) => {
      const { password, repeatedPassword } = values;

      const userData: ISetNewPasswordDataForService = {
        userId,
        password,
        repeatedPassword,
      };

      dispatch(handleSetNewPassword(userData));
    };

    if (loading) {
      return <Loader />;
    }

    return (
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className="authContainer">
              <InputLabel
                label={t('auth.password')}
                id="password"
                name="password"
                inputType="password"
                errors={errors}
                touched={touched}
                required
              />

              <InputLabel
                label={t('auth.repeatPassword')}
                id="repeatedPassword"
                name="repeatedPassword"
                inputType="password"
                errors={errors}
                touched={touched}
                required
              />

              <div className={styles.buttonContainer}>
                <Button
                  text={t('send')}
                  type="submit"
                  disabled={!isValid || !dirty}
                />
              </div>

              {error && <MessageBox errorMessage={error} />}
            </Form>
          )}
        </Formik>
      </>
    );
  });
