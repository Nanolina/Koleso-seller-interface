import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../../../components/Loader/Loader';
import { MessageBox } from '../../../../../components/MessageBox/MessageBox';
import { SelectLabel } from '../../../../../components/SelectLabel/SelectLabel';
import { IRootState } from '../../../../../redux/rootReducer';
import { AppDispatch } from '../../../../../redux/store';
import { handleGetCatalogStructure } from '../../../../../redux/thunks/catalog';
import { getOptions } from '../../../functions';
import {
  CatalogStructureSelectsProps,
  ICatalogItemType,
  ICategoryType,
  IOptions,
} from '../../../types';

/**
 * Component for rendering cascading selects for a catalog.
 * Allows the user to select a section, then a category within that section,
 * and finally a subcategory within that category.
 */
export const CatalogStructureSelects: React.FC<CatalogStructureSelectsProps> =
  React.memo(({ values, setFieldValue }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();

    const { catalogStructure, loading, error } = useSelector(
      (state: IRootState) => state.catalog
    );

    // State for category and subcategory options
    const [options, setOptions] = useState<IOptions>({
      categoryOptions: [],
      subcategoryOptions: [],
    });

    // Get catalog structure from DB
    useEffect(() => {
      dispatch(handleGetCatalogStructure());
    }, [dispatch]);

    // Update options whenever catalogStructure or selected IDs change
    useEffect(() => {
      const categoryOptions: ICategoryType[] = getOptions(
        catalogStructure,
        'categories',
        values.sectionId
      );
      const subcategoryOptions: ICatalogItemType[] = getOptions(
        catalogStructure,
        'subcategories',
        values.categoryId
      );

      setOptions({ categoryOptions, subcategoryOptions });
    }, [catalogStructure, values.sectionId, values.categoryId]);

    if (loading) return <Loader />;

    return (
      <>
        <SelectLabel
          id="sectionId"
          name="sectionId"
          label={t('products.form.selectSection')}
          options={catalogStructure}
          value={values.sectionId}
          setFieldValue={setFieldValue}
          keyInLocalStorage="product"
          firstText={t('products.form.selectSection')}
          translationType="catalog"
          required
        />

        {values.sectionId && (
          <SelectLabel
            id="categoryId"
            name="categoryId"
            label={t('products.form.selectCategory')}
            options={options.categoryOptions}
            value={values.categoryId}
            setFieldValue={setFieldValue}
            keyInLocalStorage="product"
            firstText={t('products.form.selectCategory')}
            translationType="catalog"
            required
          />
        )}

        {values.categoryId && (
          <SelectLabel
            id="subcategoryId"
            name="subcategoryId"
            label={t('products.form.selectSubcategory')}
            options={options.subcategoryOptions}
            value={values.subcategoryId}
            setFieldValue={setFieldValue}
            keyInLocalStorage="product"
            firstText={t('products.form.selectSubcategory')}
            translationType="catalog"
            required
          />
        )}

        {error && <MessageBox errorMessage={error} />}
      </>
    );
  });
