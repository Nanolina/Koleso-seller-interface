import { unwrapResult } from '@reduxjs/toolkit';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/store';
import { handleResendCode, handleVerifyCode } from '../../../redux/thunks/user';
import { IVerifyCodeData } from '../../../services/types/request';
import { CodeType } from '../../../types';
import { ValuesCode } from '../types';

export const useEmailCode = (codeType: CodeType) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [timer, setTimer] = useState(30);
  const [isButtonResendDisabled, setIsButtonResendDisabled] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Start or restart the timer
  const startTimer = useCallback(() => {
    setTimer(30);
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
  }, []);

  // Handle the resend code action
  const resendCode = useCallback(() => {
    dispatch(handleResendCode(codeType));
    if (intervalRef.current) clearInterval(intervalRef.current);
    startTimer(); // Resetting the timer to 30 seconds
  }, [codeType, dispatch, startTimer]);

  // Handle the form submission
  const onSubmitCode = useCallback(
    async (values: ValuesCode) => {
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
    },
    [codeType, dispatch, navigate]
  );

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    timer,
    isButtonResendDisabled,
    resendCode,
    onSubmitCode,
  };
};
