import { Form, Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import 'react-phone-input-2/lib/style.css';
import { useDispatch, useSelector } from 'react-redux';
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
import { formatErrors } from '../../../../../utils';
import styles from './SetNewPasswordForm.module.css';
import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';

export const SetNewPasswordForm: React.FC<ISetNewPasswordFormProps> =
  React.memo(({ userId }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();

    const { loading, error } = useSelector((state: IRootState) => state.user);

    const onSubmit = async (values: ISetNewPasswordData) => {
      const { password, repeatedPassword } = values;
      const userData: ISetNewPasswordDataForService = {
        userId,
        password,
        repeatedPassword,
      };

      dispatch(handleSetNewPassword(userData));
    };

    if (loading) return <Loader />;

    return (
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={() => validationSchema(t)}
          onSubmit={onSubmit}
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
                  tooltipText={formatErrors(errors)}
                />
              </div>

              {error && <MessageBox errorMessage={error} />}
            </Form>
          )}
        </Formik>
      </>
    );
  });
