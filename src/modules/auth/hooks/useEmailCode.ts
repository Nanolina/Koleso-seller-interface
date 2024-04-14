import { unwrapResult } from '@reduxjs/toolkit';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IRootState } from '../../../redux/rootReducer';
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

  const { email } = useSelector((state: IRootState) => state.user);

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
    dispatch(handleResendCode({ codeType, email }));
    if (intervalRef.current) clearInterval(intervalRef.current);
    startTimer(); // Resetting the timer to 30 seconds
  }, [codeType, dispatch, email, startTimer]);

  // Handle the form submission
  const onSubmitCode = useCallback(
    async (values: ValuesCode) => {
      // Prepare data to send
      const codeData: IVerifyCodeData = {
        email,
        codeType,
        code: parseInt(values.code.join('')),
      };

      // Get correct pages
      let navigateTo;
      switch (codeType) {
        case CodeType.PASSWORD_RESET:
          navigateTo = '/password/set';
          break;
        case CodeType.EMAIL_CONFIRMATION:
          navigateTo = '/settings';
          break;
        default:
          navigateTo = '';
      }

      // Verify code
      const data = await dispatch(handleVerifyCode(codeData));
      const user = unwrapResult(data);
      if (user) {
        navigate(navigateTo);
      }
    },
    [codeType, dispatch, email, navigate]
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
