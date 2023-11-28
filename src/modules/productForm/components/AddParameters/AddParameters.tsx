import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { SelectLabel } from '../../../../components/SelectLabel/SelectLabel';
import { COLORS } from '../../../../consts';
import { updateParameter } from '../../../../redux/slices/productCreationSlice';
import { Parameters } from '../Parameters/Parameters';

export const AddParameters: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleParameterUpdate = useCallback(
    (color: string) => {
      dispatch(updateParameter({ id: uuidv4(), color }));
    },
    [dispatch]
  );

  return (
    <>
      <SelectLabel
        id="color"
        name="color"
        label={t('products.form.color.label')}
        options={COLORS}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          handleParameterUpdate(event.target.value)
        }
        firstText={t('products.form.color.select')}
        translationType="products.form.color"
      />
      <Parameters />
    </>
  );
};
