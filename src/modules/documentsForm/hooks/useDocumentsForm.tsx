import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setValueDocuments } from '../../../redux/slices/documentsSlice';
import { IDocumentsFormReturn, IDocumentsState } from '../types';

export const useDocumentsForm = (): IDocumentsFormReturn => {
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (key: keyof IDocumentsState) => {
      return (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;

        dispatch(setValueDocuments({ key, value }));
      };
    },
    [dispatch]
  );

  return {
    handleChange,
  };
};
