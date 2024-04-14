import { unwrapResult } from '@reduxjs/toolkit';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputLabel } from '../../../../../components/InputLabel/InputLabel';
import { Loader } from '../../../../../components/Loader/Loader';
import { MessageBox } from '../../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../../redux/rootReducer';
import { AppDispatch } from '../../../../../redux/store';
import { handleRequestPasswordRecovery } from '../../../../../redux/thunks/user';
import { IChangeEmailData } from '../../../../../services/types/request';
import { CodeType } from '../../../../../types';
import { Button } from '../../../../../ui/Button/Button';
import styles from './RequestPasswordRecoveryForm.module.css';
import { initialValues } from './initialValues';

export const RequestPasswordRecoveryForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, success } = useSelector(
    (state: IRootState) => state.user
  );

  const onSubmit = async (values: IChangeEmailData) => {
    const userData: IChangeEmailData = {
      email: values.email,
    };

    const data = await dispatch(handleRequestPasswordRecovery(userData));
    const user = unwrapResult(data);
    if (user) {
      navigate(`/code/${CodeType.PASSWORD_RESET}`);
    }
  };

  if (loading) return <Loader />;

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, setFieldValue, errors, touched, isValid, dirty }) => (
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

          <div className={styles.container}>
            <Button
              text={t('send')}
              type="submit"
              disabled={!isValid || !dirty}
            />
          </div>

          {error && <MessageBox errorMessage={error} />}
          {success && <MessageBox successMessage={success} />}
        </Form>
      )}
    </Formik>
  );
};
