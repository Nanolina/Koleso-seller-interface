import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Filter } from '../../../../../components/Filter/Filter';
import { SelectLabel } from '../../../../../components/SelectLabel/SelectLabel';
import { COLORS } from '../../../../../consts';
import { IRootState } from '../../../../../redux/rootReducer';
import { toggleShowDeletedVariants } from '../../../../../redux/slices/productsSlice';
import { AppDispatch } from '../../../../../redux/store';
import { RemoveItemModal } from '../../../../modal';
import { ColorType } from '../../../types';
import { createNewVariant } from '../../functions';
import { IAddVariantsProps } from '../../types';
import useVariant from '../../useVariant';
import { VariantsTable } from '../VariantsTable/VariantsTable';

export const AddVariants: React.FC<IAddVariantsProps> = React.memo(
  ({ values, setFieldValue, errors, touched }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();

    const [modalOpen, setModalOpen] = useState(false);
    const [color, setColor] = useState<ColorType | string>('');
    const [sortedColors, setSortedColors] = useState<
      { name: string; value: string }[]
    >([]);

    const { showDeleted, variantId } = useSelector(
      (state: IRootState) => state.products.product.variants
    );
    const { handleRemoveVariant } = useVariant(values.variants, setFieldValue);

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
          modalOpen={modalOpen}
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
