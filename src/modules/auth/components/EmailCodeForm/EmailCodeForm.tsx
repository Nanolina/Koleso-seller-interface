import { unwrapResult } from '@reduxjs/toolkit';
import { Form, Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import VerificationInput from 'react-verification-input';
import { Loader } from '../../../../components/Loader/Loader';
import { MessageBox } from '../../../../components/MessageBox/MessageBox';
import { IRootState } from '../../../../redux/rootReducer';
import { AppDispatch } from '../../../../redux/store';
import {
  handleResendCode,
  handleVerifyCode,
} from '../../../../redux/thunks/user';
import { IVerifyCodeData } from '../../../../services/types/request';
import { CodeType } from '../../../../types';
import { Button } from '../../../../ui/Button/Button';
import { TimerText } from '../../ui/Timer/Timer';
import styles from './EmailCodeForm.module.css';
import { initialValues } from './initialValues';

export const EmailCodeForm: React.FC<{
  codeType: CodeType;
}> = ({ codeType }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { loading, error, success, email } = useSelector(
    (state: IRootState) => state.user
  );

  const [timer, setTimer] = useState(30);
  const [isButtonResendDisabled, setIsButtonResendDisabled] = useState(true);

  const startTimer = () => {
    setTimer(30);
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
  };

  const resendCode = () => {
    dispatch(handleResendCode(codeType));
    if (intervalRef.current) clearInterval(intervalRef.current);
    startTimer(); // Resetting the timer to 30 seconds
  };

  const onSubmit = async (values: any) => {
    const codeData: IVerifyCodeData = {
      codeType,
      code: parseInt(values.code.join('')),
    };

    let data;
    switch (codeType) {
      case CodeType.EMAIL_CONFIRMATION:
        data = await dispatch(handleVerifyCode(codeData));
        const { isVerifiedEmail } = unwrapResult(data);
        if (isVerifiedEmail) navigate('/settings');
        break;
      case CodeType.PASSWORD_RESET:
        data = await dispatch(handleVerifyCode(codeData));
        const isCodeVerified = unwrapResult(data);
        if (isCodeVerified) navigate('/password/set');
        break;
    }
  };

  // Timer
  useEffect(() => {
    if (timer === 0) {
      setIsButtonResendDisabled(false);
      clearInterval(intervalRef.current as NodeJS.Timeout);
    } else {
      setIsButtonResendDisabled(true);
    }
  }, [timer]);

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (loading) return <Loader />;

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, setFieldValue, errors, touched, handleSubmit }) => (
        <Form className="authContainer">
          <div>
            <p>{t('auth.code.email.sent')}</p>
            <p>{email}</p>
            <p>{t('auth.code.email.copy')}</p>
          </div>

          <VerificationInput
            classNames={{
              container: styles.inputContainer,
              character: styles.character,
            }}
            value={values.code.join('')}
            onChange={(code) => {
              setFieldValue('code', code.split(''));
              if (code.length === 6) {
                handleSubmit();
              }
            }}
          />

          {timer > 0 ? (
            <TimerText timer={timer} />
          ) : (
            <Button
              onClick={resendCode}
              text={t('auth.code.email.resend', { email })}
              disabled={isButtonResendDisabled}
            />
          )}
          {error && (
            <MessageBox
              errorMessage={error}
              // clearMessage={() => dispatch(clearMessages())}
            />
          )}
          {success && (
            <MessageBox
              successMessage={success}
              // clearMessage={() => dispatch(clearMessages())}
            />
          )}
        </Form>
      )}
    </Formik>
  );
};
