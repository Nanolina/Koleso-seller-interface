import { setValueDocuments } from '../../../redux/slices/documentsSlice';
import { IDocumentsFormReturn, IDocumentsState } from '../types';
import { useFormChangeHandler } from './useFormChangeHandler';

export const useDocumentsForm = (): IDocumentsFormReturn => {
  const handleChange = useFormChangeHandler<IDocumentsState>(setValueDocuments);

  return {
    handleChange,
  };
};
