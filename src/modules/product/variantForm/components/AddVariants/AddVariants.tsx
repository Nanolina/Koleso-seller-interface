import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Filter } from '../../../../../components/Filter/Filter';
import { SelectLabel } from '../../../../../components/SelectLabel/SelectLabel';
import { COLORS } from '../../../../../consts';
import { IRootState } from '../../../../../redux/rootReducer';
import { toggleShowDeletedVariants } from '../../../../../redux/slices/productsSlice';
import { AppDispatch } from '../../../../../redux/store';
import { sortTranslatedEntities } from '../../../functions';
import { ColorType } from '../../../types';
import { createNewVariant } from '../../functions';
import { IVariantsProps } from '../../types';
import { VariantsTable } from '../VariantsTable/VariantsTable';

export const AddVariants: React.FC<IVariantsProps> = React.memo(
  ({ values, setFieldValue, errors, touched }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();

    // useState
    const [color, setColor] = useState<ColorType | string>('');
    const [sortedColors, setSortedColors] = useState<
      { name: string; value: string }[]
    >([]);

    // Redux
    const { showDeleted } = useSelector(
      (state: IRootState) => state.products.product.variants
    );

    // Handlers
    const handleCreateNewVariant = useCallback(
      (colorValue: ColorType) => {
        if (!colorValue) return;
        setColor(colorValue);
        const newVariants = createNewVariant(colorValue, values.variants);
        setFieldValue('variants', newVariants);
      },
      [values.variants, setFieldValue]
    );

    // Translate and sort colors
    useEffect(() => {
      const sortColors = sortTranslatedEntities(
        COLORS,
        'products.variants.color',
        t
      );
      setSortedColors(sortColors);
    }, [t]);

    return (
      <>
        <Filter
          text={t('showDeleted')}
          checked={showDeleted}
          onChange={() => dispatch(toggleShowDeletedVariants())}
        />
        <SelectLabel
          id="color"
          name="color"
          label={t('products.variants.color.label')}
          options={sortedColors}
          value={color}
          onChange={handleCreateNewVariant}
          firstText={t('products.variants.color.select')}
          required
        />
        <VariantsTable
          values={values}
          setFieldValue={setFieldValue}
          errors={errors}
          touched={touched}
        />
      </>
    );
  }
);
