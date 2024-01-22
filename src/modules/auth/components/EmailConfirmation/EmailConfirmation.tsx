import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { Loader } from '../../../../components/Loader/Loader';
import { MessageBox } from '../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import {
  handleChangeEmail,
  handleResendEmailConfirmation,
} from '../../../../redux/thunks/user';
import {
  IChangeEmailData,
  IResendEmailConfirmationData,
} from '../../../../services/types/request';
import { Button } from '../../../../ui/Button/Button';
import styles from './EmailConfirmation.module.css';

export const EmailConfirmation: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  const [changeEmailOpen, setChangeEmailOpen] = useState<boolean>(true);

  const { loading, error, email, activationLinkId } = useSelector(
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

  const handleSubmitChangeEmail = async (values: IChangeEmailData) => {
    const userData: IChangeEmailData = {
      email: values.email,
    };

    dispatch(handleChangeEmail(userData));
  };

  const handleSubmitResendEmailConfirmation = async () => {
    const userData: IResendEmailConfirmationData = {
      email,
      activationLinkId,
    };

    dispatch(handleResendEmailConfirmation(userData));
  };

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    );
  }

  return (
    <div className="authContainer">
      <h3>{t('auth.changeEmail.header')}</h3>
      <ol>
        {t('auth.changeEmail.caseNotReceive')}:
        <li>
          {t('auth.changeEmail.check')}: {email}
        </li>
        <li>{t('auth.changeEmail.spam')}</li>
        <li> {t('auth.changeEmail.wait')}</li>
      </ol>
      <Button
        text="Click here to change email address"
        onClick={() => setChangeEmailOpen(!changeEmailOpen)}
        backgroundColor="var(--light-gray)"
        textColor="black"
        isBold={false}
        hasShadow={true}
      />
      {changeEmailOpen && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmitChangeEmail}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className="authContainer">
              <InputLabel
                name="email"
                inputType="email"
                label={t('auth.email')}
                id="email"
                errors={errors}
                touched={touched}
                required
              />
              <Button
                text={t('auth.changeEmail.label')}
                type="submit"
                disabled={!isValid || !dirty}
              />
            </Form>
          )}
        </Formik>
      )}
      <Button
        text={`Click here to try resending the email: ${email}`}
        onClick={handleSubmitResendEmailConfirmation}
        type="submit"
        backgroundColor="var(--light-gray)"
        textColor="black"
        isBold={false}
        hasShadow={true}
      />
      {error && <MessageBox errorMessage={error} />}
    </div>
  );
};
