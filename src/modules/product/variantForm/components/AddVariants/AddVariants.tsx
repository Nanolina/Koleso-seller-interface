import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectLabel } from '../../../../../components/SelectLabel/SelectLabel';
import { COLORS } from '../../../../../consts';
import { ColorType } from '../../../types';
import { createNewVariant, updateVariantsLocalStorage } from '../../functions';
import { IVariantsProps } from '../../types';
import { Variants } from '../Variants/Variants';

export const AddVariants: React.FC<IVariantsProps> = React.memo(
  ({ values, setFieldValue, errors, touched, resetForm, initialValues }) => {
    const { t } = useTranslation();

    const [color, setColor] = useState<ColorType | string>('');

    const handleCreateNewVariant = (colorValue: ColorType) => {
      if (!colorValue) return;

      setColor(colorValue);

      const newVariants = createNewVariant(colorValue, values.variants);
      setFieldValue('variants', newVariants);
      updateVariantsLocalStorage(newVariants);
    };

    return (
      <>
        <SelectLabel
          id="color"
          name="color"
          label={t('products.form.color.label')}
          options={COLORS}
          value={color}
          onChange={handleCreateNewVariant}
          firstText={t('products.form.color.select')}
          translationType="products.form.color"
          required
        />
        <Variants
          values={values}
          setFieldValue={setFieldValue}
          errors={errors}
          touched={touched}
        />
      </>
    );
  }
);
