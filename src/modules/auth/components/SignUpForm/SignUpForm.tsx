import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import 'react-phone-input-2/lib/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { Loader } from '../../../../components/Loader/Loader';
import { MessageBox } from '../../../../components/MessageBox/MessageBox';
import { Phone } from '../../../../components/Phone/Phone';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import { handleSignup } from '../../../../redux/thunks/user';
import { ISignupData } from '../../../../services/types/request';
import { Button } from '../../../../ui/Button/Button';
import { Email } from '../../../../ui/Email/Email';
import styles from './SignupForm.module.css';
import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';

export const SignupForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error } = useSelector((state: IRootState) => state.user);

  const onSubmit = async (values: ISignupData) => {
    const { email, phone, password, repeatedPassword } = values;

    const userData: ISignupData = {
      email,
      phone,
      password,
      repeatedPassword,
    };

    dispatch(handleSignup(userData));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={() => validationSchema(t)}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, setFieldValue, isValid, dirty }) => (
          <Form className="authContainer">
            <Phone
              valuesPhone={values.phone}
              errors={errors.phone}
              setFieldValue={setFieldValue}
            />

            <Email
              value={values.email}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
            />

            <InputLabel
              label={t('auth.password')}
              id="password"
              name="password"
              inputType="password"
              value={values.password}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
              required
            />

            <InputLabel
              label={t('auth.repeatPassword')}
              id="repeatedPassword"
              name="repeatedPassword"
              inputType="password"
              value={values.repeatedPassword}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
              required
            />

            <div className={styles.buttonContainer}>
              <Button
                text={t('auth.signup')}
                type="submit"
                disabled={!isValid || !dirty}
              />
            </div>
            {error && <MessageBox errorMessage={error} />}
          </Form>
        )}
      </Formik>

      <div className={styles.loginButtonsContainer}>
        <span className={styles.haveAccount}>{`${t(
          'auth.haveAccount'
        )}?`}</span>
        <Button text={t('auth.login')} onClick={() => navigate('/login')} />
      </div>
    </>
  );
};
