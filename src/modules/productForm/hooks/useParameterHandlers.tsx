import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  addOrUpdateParameter,
  copyParameter,
  removeParameter,
} from '../../../redux/slices/productCreationSlice';
import { IParameterHandlersReturn } from '../types';

export const useParameterHandlers = (
  parameterId: string
): IParameterHandlersReturn => {
  const dispatch = useDispatch();

  const handleQuantityUpdate = useCallback(
    (quantity: string) => {
      dispatch(addOrUpdateParameter({ id: parameterId, quantity }));
    },
    [dispatch, parameterId]
  );

  const handleSizeUpdate = useCallback(
    (size: string) => {
      dispatch(addOrUpdateParameter({ id: parameterId, size }));
    },
    [dispatch, parameterId]
  );

  const handleRemoveParameter = useCallback(
    () => dispatch(removeParameter(parameterId)),
    [dispatch, parameterId]
  );

  const handleCopyParameter = useCallback(
    () => dispatch(copyParameter(parameterId)),
    [dispatch, parameterId]
  );

  return {
    handleQuantityUpdate,
    handleSizeUpdate,
    handleRemoveParameter,
    handleCopyParameter,
  };
};
