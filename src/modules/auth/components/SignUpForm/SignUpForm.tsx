import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { AppDispatch } from '../../../../redux/store';
import { handleSignUp } from '../../../../redux/thunks/userThunks';
import { ISignUpData } from '../../../../services/types/request';
import { Button } from '../../../../ui/Button/Button';
import { ErrorMessage } from '../../../../ui/ErrorMessage/ErrorMessage';
import { Label } from '../../../../ui/Label/Label';
import styles from './SignUpForm.module.css';

YupPassword(Yup);

export const SignUpForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // Initial values
  const initialValues = {
    phone: '',
    email: '',
    password: '',
    repeatedPassword: '',
  };

  // Schema
  const validationSchema = Yup.object({
    phone: Yup.string()
      .min(10, t('auth.validation.phoneRequired'))
      .required(t('auth.validation.phoneRequired')),
    email: Yup.string()
      .email(t('auth.validation.invalidEmail'))
      .required(t('auth.validation.emailRequired')),
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

  const handleSubmit = async (values: ISignUpData) => {
    const { email, phone, password, repeatedPassword } = values;

    const userData: ISignUpData = {
      email,
      phone,
      password,
      repeatedPassword,
    };

    // Request to server
    dispatch(handleSignUp(userData));

    // Navigate to home
    navigate('/');
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue, isValid, dirty }) => (
          <Form className="authContainer">
            <div className={styles.phoneContainer}>
              <Label text={`${t('auth.phone')}*`} id="phone" />
              <PhoneInput
                country={'cy'}
                value={values.phone}
                onChange={(value) => setFieldValue('phone', value)}
                inputStyle={{
                  backgroundColor: 'var(--light-gray)',
                  borderColor: errors.phone ? 'red' : 'var(--light-gray)',
                }}
                dropdownStyle={{
                  backgroundColor: 'var(--light-gray)',
                  borderColor: 'var(--light-gray)',
                }}
                buttonStyle={{
                  borderColor: errors.phone ? 'red' : 'var(--light-gray)',
                }}
              />
            </div>
            {errors.phone ? <ErrorMessage error={errors.phone} /> : null}

            <InputLabel
              name="email"
              inputType="email"
              label={t('auth.email')}
              id="email"
              errors={errors}
              touched={touched}
              required
            />

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
                text={t('auth.signUp')}
                type="submit"
                disabled={!isValid || !dirty}
              />
            </div>
          </Form>
        )}
      </Formik>

      <div className={styles.logInButtonsContainer}>
        <span className={styles.haveAccount}>{`${t(
          'auth.haveAccount'
        )}?`}</span>
        <Button text={t('auth.logIn')} onClick={() => navigate('/login')} />
      </div>
    </>
  );
};
