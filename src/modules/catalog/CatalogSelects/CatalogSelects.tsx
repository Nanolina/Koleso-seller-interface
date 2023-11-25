import React, { useCallback, useState } from 'react';
import { SelectLabel } from '../../../components/SelectLabel/SelectLabel';
import { data } from '../data';
import { getOptions } from '../functions';
import { useTranslation } from 'react-i18next';

/**
 * Component for rendering cascading selects for a catalog.
 * Allows the user to select a section, then a category within that section,
 * and finally a subcategory within that category.
 */
export const CatalogSelects: React.FC = () => {
  const { t } = useTranslation();

  const [selections, setSelections] = useState({
    section: '',
    category: '',
    subcategory: '',
  });

  // Callback for handling changes to any of the select elements
  const handleSelectChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = event.target;

      // Update the appropriate selection state based on the name of the select changed
      // If a higher-level select is changed, reset any lower-level selections
      setSelections((prevSelections) => ({
        ...prevSelections,
        [name]: value,
        ...(name === 'section' && { category: '', subcategory: '' }),
        ...(name === 'category' && { subcategory: '' }),
      }));
    },
    []
  );

  const sectionOptions = data;
  const categoryOptions = getOptions('categories', selections.section);
  const subcategoryOptions = getOptions('subcategories', selections.category);

  return (
    <>
      <SelectLabel
        id="section"
        name="section"
        label={t('products.form.selectSection')}
        options={sectionOptions}
        onChange={handleSelectChange}
        value={selections.section}
        firstText={t('products.form.selectSection')}
        translationType="catalog"
        isHalfWidth
        required
      />

      {selections.section && (
        <SelectLabel
          id="category"
          name="category"
          label={t('products.form.selectCategory')}
          options={categoryOptions}
          onChange={handleSelectChange}
          value={selections.category}
          firstText={t('products.form.selectCategory')}
          translationType="catalog"
          isHalfWidth
          required
        />
      )}

      {selections.category && (
        <SelectLabel
          id="subcategory"
          name="subcategory"
          label={t('products.form.selectSubcategory')}
          options={subcategoryOptions}
          onChange={handleSelectChange}
          value={selections.subcategory}
          firstText={t('products.form.selectSubcategory')}
          translationType="catalog"
          isHalfWidth
          required
        />
      )}
    </>
  );
};
