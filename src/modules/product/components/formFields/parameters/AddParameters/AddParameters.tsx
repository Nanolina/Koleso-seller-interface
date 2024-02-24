import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { SelectLabel } from '../../../../../../components/SelectLabel/SelectLabel';
import { COLORS } from '../../../../../../consts';
import { updateLocalStorage } from '../../../../functions';
import { ColorType, ICreateProductValuesProps } from '../../../../types';
import { Parameters } from '../Parameters/Parameters';

export const AddParameters: React.FC<ICreateProductValuesProps> = React.memo(
  ({ values, setFieldValue }) => {
    const { t } = useTranslation();

    const [color, setColor] = useState<ColorType | string>('');

    const createNewParameter = (colorValue: string) => {
      setColor(colorValue);

      const newParameters = [
        // ...values.parameters,
        { id: uuidv4(), color: colorValue, quantity: 1 },
      ];
      setFieldValue('parameters', newParameters);
      updateLocalStorage(newParameters);
    };

    return (
      <>
        <SelectLabel
          id="color"
          name="color"
          label={t('products.form.color.label')}
          options={COLORS}
          value={color?.toString()}
          onChange={createNewParameter}
          firstText={t('products.form.color.select')}
          translationType="products.form.color"
          required
        />
        <Parameters values={values} setFieldValue={setFieldValue} />
      </>
    );
  }
);
