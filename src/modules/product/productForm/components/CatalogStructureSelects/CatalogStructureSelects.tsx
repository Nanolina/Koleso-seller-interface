import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../../../components/Loader/Loader';
import { MessageBox } from '../../../../../components/MessageBox/MessageBox';
import { SelectLabel } from '../../../../../components/SelectLabel/SelectLabel';
import { IRootState } from '../../../../../redux/rootReducer';
import { AppDispatch } from '../../../../../redux/store';
import { handleGetCatalogStructure } from '../../../../../redux/thunks/catalog';
import { getOptions } from '../../functions';
import { ICreateProductValuesProps, IOptions, ISectionType } from '../../types';

/**
 * Component for rendering cascading selects for a catalog.
 * Allows the user to select a section, then a category within that section,
 * and finally a subcategory within that category.
 */
export const CatalogStructureSelects: React.FC<ICreateProductValuesProps> =
  React.memo(({ values, setFieldValue }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();

    const { catalogStructure, loading, error } = useSelector(
      (state: IRootState) => state.catalog
    );

    const [prevSectionId, setPrevSectionId] = useState<number>(
      values.sectionId
    );
    const [prevCategoryId, setPrevCategoryId] = useState<number | undefined>(
      values.categoryId
    );
    const [sections, setSections] = useState<ISectionType[]>([]);
    const [options, setOptions] = useState<IOptions>({
      categoryOptions: [],
      subcategoryOptions: [],
    });

    // Get catalog structure from DB
    useEffect(() => {
      dispatch(handleGetCatalogStructure());
    }, [dispatch]);

    // Sort sections
    useEffect(() => {
      const sortedSections = [...catalogStructure]
        .map((section) => ({
          ...section,
          name: t(`catalog.${section.name}`),
        }))
        .sort((a, b) =>
          t(`catalog.${a.name}`).localeCompare(t(`catalog.${b.name}`), 'ru')
        );
      setSections(sortedSections);
    }, [catalogStructure, t]);

    // Update categories only if section is selected
    useEffect(() => {
      if (values.sectionId) {
        const sortedCategoryOptions = getOptions(
          sections,
          'categories',
          values.sectionId
        )
          .map((category) => ({
            ...category,
            name: t(`catalog.${category.name}`),
          }))
          .sort((a, b) => a.name.localeCompare(b.name, 'ru'));

        setOptions((prevOptions) => ({
          ...prevOptions,
          categoryOptions: sortedCategoryOptions,
        }));
      }
    }, [sections, values.sectionId, t]);

    // Update subcategories only if a category is selected
    useEffect(() => {
      if (values.categoryId) {
        const sortedSubcategoryOptions = getOptions(
          sections,
          'subcategories',
          values.categoryId
        )
          .map((subcategory) => ({
            ...subcategory,
            name: t(`catalog.${subcategory.name}`),
          }))
          .sort((a, b) => a.name.localeCompare(b.name, 'ru'));

        setOptions((prevOptions) => ({
          ...prevOptions,
          subcategoryOptions: sortedSubcategoryOptions,
        }));
      }
    }, [sections, values.categoryId, t]);

    // Reset categoryId и subcategoryId when change sectionId
    useEffect(() => {
      if (values.sectionId !== prevSectionId && prevSectionId !== undefined) {
        setFieldValue('categoryId', undefined);
        setFieldValue('subcategoryId', undefined);
      }
      setPrevSectionId(values.sectionId);
    }, [values.sectionId, prevSectionId, setFieldValue]);

    // Reset subcategoryId when change categoryId
    useEffect(() => {
      if (
        values.categoryId !== prevCategoryId &&
        prevCategoryId !== undefined
      ) {
        setFieldValue('subcategoryId', undefined);
      }
      setPrevCategoryId(values.categoryId);
    }, [values.categoryId, prevCategoryId, setFieldValue]);

    if (loading) return <Loader />;

    return (
      <>
        <SelectLabel
          id="sectionId"
          name="sectionId"
          label={t('products.form.selectSection')}
          options={sections}
          value={values.sectionId || 0}
          setFieldValue={setFieldValue}
          firstText={t('products.form.selectSection')}
          isNumber
          required
        />

        {values.sectionId ? (
          <SelectLabel
            id="categoryId"
            name="categoryId"
            label={t('products.form.selectCategory')}
            options={options.categoryOptions}
            value={values.categoryId || 0}
            setFieldValue={setFieldValue}
            firstText={t('products.form.selectCategory')}
            isNumber
          />
        ) : undefined}

        {values.categoryId ? (
          <SelectLabel
            id="subcategoryId"
            name="subcategoryId"
            label={t('products.form.selectSubcategory')}
            options={options.subcategoryOptions}
            value={values.subcategoryId || 0}
            setFieldValue={setFieldValue}
            firstText={t('products.form.selectSubcategory')}
            isNumber
          />
        ) : undefined}

        {error && <MessageBox errorMessage={error} />}
      </>
    );
  });
