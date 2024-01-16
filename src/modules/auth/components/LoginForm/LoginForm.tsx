import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { AuthService } from '../../../../services';
import { ILoginData } from '../../../../services/types/request';
import { Button } from '../../../../ui/Button/Button';
import styles from './LoginForm.module.css';

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Initial values
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values: ILoginData) => {
    const { email, password } = values;

    const userData: ILoginData = {
      email,
      password,
    };

    try {
      // Submit a request
      const response = await AuthService.login(userData);
      localStorage.setItem('token', response.data.accessToken);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, errors, touched, setFieldValue, isValid, dirty }) => (
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

          <InputLabel
            label={t('auth.password')}
            id="password"
            name="password"
            inputType="password"
            errors={errors}
            touched={touched}
            required
          />
          <div className={styles.logInButtonsContainer}>
            <span>{`${t('auth.forgotPassword')}?`}</span>
            <Button text={t('auth.logIn')} type="submit" />
          </div>
          <div className={styles.signUpButtonsContainer}>
            <span className={styles.notAccount}>{t('auth.notAccount')}</span>
            <Button
              text={t('auth.signUp')}
              onClick={() => navigate('/signup')}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};
