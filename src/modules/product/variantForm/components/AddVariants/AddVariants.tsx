import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Filter } from '../../../../../components/Filter/Filter';
import { SelectLabel } from '../../../../../components/SelectLabel/SelectLabel';
import { IRootState } from '../../../../../redux/rootReducer';
import { toggleShowDeletedVariants } from '../../../../../redux/slices/productsSlice';
import { AppDispatch } from '../../../../../redux/store';
import { RemoveItemModal } from '../../../../modal';
import { ColorType } from '../../../types';
import { createNewVariant, sortTranslatedColors } from '../../functions';
import { IAddVariantsProps } from '../../types';
import useVariant from '../../useVariant';
import { VariantsTable } from '../VariantsTable/VariantsTable';

export const AddVariants: React.FC<IAddVariantsProps> = React.memo(
  ({ values, setFieldValue, errors, touched }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();

    // useState
    const [modalOpen, setModalOpen] = useState(false);
    const [color, setColor] = useState<ColorType | string>('');
    const [sortedColors, setSortedColors] = useState<
      { name: string; value: string }[]
    >([]);

    // Redux
    const { showDeleted, variantId } = useSelector(
      (state: IRootState) => state.products.product.variants
    );

    // Handlers
    const { handleRemoveVariant } = useVariant(values.variants, setFieldValue);
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
      const sortColors = sortTranslatedColors(t);
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
          label={t('products.form.color.label')}
          options={sortedColors}
          value={color}
          onChange={handleCreateNewVariant}
          firstText={t('products.form.color.select')}
          required
        />
        <VariantsTable
          values={values}
          setFieldValue={setFieldValue}
          errors={errors}
          touched={touched}
          setModalOpen={setModalOpen}
        />
        <RemoveItemModal
          text={t('products.form.variants.modal.removeText')}
          extraText={t('products.form.variants.modal.removeExtraText')}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          onRemove={() => {
            handleRemoveVariant(variantId);
            setModalOpen(false);
          }}
        />
      </>
    );
  }
);
