import { PayloadActionCreator } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useFormChangeHandler = <TState,>(
  actionCreator: PayloadActionCreator<{ key: keyof TState; value: string }>
) => {
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (key: keyof TState) => {
      return (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        dispatch(actionCreator({ key, value }));
      };
    },
    [dispatch, actionCreator]
  );

  return handleChange;
};
