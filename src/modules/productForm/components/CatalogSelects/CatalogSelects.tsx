import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useProductForm } from '../..';
import { SelectLabel } from '../../../../components/SelectLabel/SelectLabel';
import { IRootState } from '../../../../redux/rootReducer';
import { data } from '../../../catalog/data';
import { getOptions } from '../../../catalog/functions';

/**
 * Component for rendering cascading selects for a catalog.
 * Allows the user to select a section, then a category within that section,
 * and finally a subcategory within that category.
 */
export const CatalogSelects: React.FC = () => {
  const { t } = useTranslation();

  // Get the catalog values from redux
  const { section, category, subcategory } = useSelector(
    (state: IRootState) => state.productCreationStrings
  );

  // Enter possible categories in local states when selecting a section
  const [categoryOptions, setCategoryOptions] = useState(
    getOptions('categories', section)
  );

  // Enter possible subcategories in local states when selecting a category
  const [subcategoryOptions, setSubcategoryOptions] = useState(
    getOptions('subcategories', category)
  );

  // Functions for working with catalog values in redux
  const { handleChange, handleReset } = useProductForm();

  // Assign initial sections
  const sectionOptions = data;

  /**
   * When changing a section,
   * delete the category and subcategory,
   * and re-search for possible categories
   **/
  useEffect(() => {
    handleReset('category');
    handleReset('subcategory');
    setCategoryOptions(getOptions('categories', section));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);

  /**
   * When changing a category,
   * delete the subcategory,
   * and re-search for possible subcategories
   **/
  useEffect(() => {
    handleReset('subcategory');
    setSubcategoryOptions(getOptions('subcategories', category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <>
      <SelectLabel
        id="section"
        name="section"
        label={t('products.form.selectSection')}
        options={sectionOptions}
        onChange={handleChange('section')}
        value={section}
        firstText={t('products.form.selectSection')}
        translationType="catalog"
        required
      />

      {section && (
        <SelectLabel
          id="category"
          name="category"
          label={t('products.form.selectCategory')}
          options={categoryOptions}
          onChange={handleChange('category')}
          value={category}
          firstText={t('products.form.selectCategory')}
          translationType="catalog"
          required
        />
      )}

      {category && (
        <SelectLabel
          id="subcategory"
          name="subcategory"
          label={t('products.form.selectSubcategory')}
          options={subcategoryOptions}
          onChange={handleChange('subcategory')}
          value={subcategory}
          firstText={t('products.form.selectSubcategory')}
          translationType="catalog"
          required
        />
      )}
    </>
  );
};
