import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { InputLabel } from '../../../../components/InputLabel/InputLabel';
import { Loader } from '../../../../components/Loader/Loader';
import { MessageBox } from '../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import { handleLogin } from '../../../../redux/thunks/user';
import { ILoginData } from '../../../../services/types/request';
import { Button } from '../../../../ui/Button/Button';
import styles from './LoginForm.module.css';

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error } = useSelector((state: IRootState) => state.user);

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

    dispatch(handleLogin(userData));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue, errors, touched }) => (
        <Form className="authContainer">
          <InputLabel
            name="email"
            inputType="email"
            label={t('auth.email')}
            id="email"
            value={values.email}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            required
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
          <div className={styles.loginButtonsContainer}>
            <Link to="/password/recovery">{`${t(
              'auth.forgetPassword'
            )}?`}</Link>
            <Button text={t('auth.login')} type="submit" />
          </div>
          <div className={styles.signupButtonsContainer}>
            <span className={styles.notAccount}>{t('auth.notAccount')}</span>
            <Button
              text={t('auth.signup')}
              onClick={() => navigate('/signup')}
            />
          </div>

          {error && <MessageBox errorMessage={error} />}
        </Form>
      )}
    </Formik>
  );
};
