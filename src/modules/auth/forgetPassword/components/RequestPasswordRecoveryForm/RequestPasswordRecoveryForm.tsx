import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { InputLabel } from '../../../../../components/InputLabel/InputLabel';
import { Loader } from '../../../../../components/Loader/Loader';
import { MessageBox } from '../../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../../redux/rootReducer';
import { AppDispatch } from '../../../../../redux/store';
import { handleRequestPasswordRecovery } from '../../../../../redux/thunks/user';
import { IChangeEmailData } from '../../../../../services/types/request';
import { Button } from '../../../../../ui/Button/Button';
import { TimerText } from '../../../ui/Timer/Timer';
import styles from './RequestPasswordRecoveryForm.module.css';
import { initialValues } from './initialValues';

export const RequestPasswordRecoveryForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(0);

  const { loading, error, success } = useSelector(
    (state: IRootState) => state.user
  );

  useEffect(() => {
    let interval: number | undefined;

    if (isButtonDisabled) {
      interval = window.setInterval(() => {
        setTimer((oldTimer) => {
          if (oldTimer > 0) return oldTimer - 1;
          clearInterval(interval);
          return 0;
        });
      }, 1000);
    }

    return () => {
      if (interval !== undefined) clearInterval(interval);
    };
  }, [isButtonDisabled]);

  const onSubmit = async (values: IChangeEmailData) => {
    setIsButtonDisabled(true);
    setTimer(120); // 2 min = 120 sec

    const userData: IChangeEmailData = {
      email: values.email,
    };

    dispatch(handleRequestPasswordRecovery(userData));

    setTimeout(() => setIsButtonDisabled(false), 120000); // 120000 milliseconds = 2 min
  };

  if (loading) return <Loader />;

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
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

          <div className={styles.container}>
            <Button
              text={t('send')}
              type="submit"
              disabled={isButtonDisabled}
            />
            {isButtonDisabled && <TimerText timer={timer} />}
          </div>

          {error && <MessageBox errorMessage={error} />}
          {success && <MessageBox successMessage={success} />}
        </Form>
      )}
    </Formik>
  );
};
