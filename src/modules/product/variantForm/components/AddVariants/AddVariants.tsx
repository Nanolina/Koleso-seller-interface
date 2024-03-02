import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectLabel } from '../../../../../components/SelectLabel/SelectLabel';
import { COLORS } from '../../../../../consts';
import { ColorType } from '../../../types';
import { createNewVariant } from '../../functions';
import { IVariantsProps } from '../../types';
import { Variants } from '../Variants/Variants';

export const AddVariants: React.FC<IVariantsProps> = React.memo(
  ({ values, setFieldValue, errors, touched }) => {
    const { t } = useTranslation();

    const [color, setColor] = useState<ColorType | string>('');
    const [sortedColors, setSortedColors] = useState<
      { name: string; value: string }[]
    >([]);

    const handleCreateNewVariant = (colorValue: ColorType) => {
      if (!colorValue) return;
      setColor(colorValue);
      const newVariants = createNewVariant(colorValue, values.variants);
      setFieldValue('variants', newVariants);
    };

    // Translate and sort colors
    useEffect(() => {
      const translatedColors = COLORS.map((color) => ({
        name: t(`products.form.color.${color}`),
        value: color,
      }));
      const sortedTranslatedColors = translatedColors.sort((a, b) =>
        a.name.localeCompare(b.name, 'default', { numeric: true })
      );
      setSortedColors(sortedTranslatedColors);
    }, [t]);

    return (
      <>
        <SelectLabel
          id="color"
          name="color"
          label={t('products.form.color.label')}
          options={sortedColors}
          value={color}
          onChange={handleCreateNewVariant}
          firstText={t('products.form.color.select')}
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
