import { setValueAccountData } from '../../../redux/slices/accountDataSlice';
import { IAccountDataFormReturn, IAccountDataState } from '../types';
import { useFormChangeHandler } from './useFormChangeHandler';

export const useAccountDataForm = (): IAccountDataFormReturn => {
  const handleChange =
    useFormChangeHandler<IAccountDataState>(setValueAccountData);

  return {
    handleChange,
  };
};
