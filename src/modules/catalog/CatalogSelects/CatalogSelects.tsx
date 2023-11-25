import React, { useCallback, useState } from 'react';
import { SelectLabel } from '../../../components/SelectLabel/SelectLabel';
import { data } from '../data';
import { getOptions } from '../functions';

/**
 * Component for rendering cascading selects for a catalog.
 * Allows the user to select a section, then a category within that section,
 * and finally a subcategory within that category.
 */
export const CatalogSelects: React.FC = () => {
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
        label="Select a section"
        options={sectionOptions}
        onChange={handleSelectChange}
        value={selections.section}
        firstText="Select section"
        isHalfWidth
        required
      />

      {selections.section && (
        <SelectLabel
          id="category"
          name="category"
          label="Select a category"
          options={categoryOptions}
          onChange={handleSelectChange}
          value={selections.category}
          firstText="Select category"
          isHalfWidth
          required
        />
      )}

      {selections.category && (
        <SelectLabel
          id="subcategory"
          name="subcategory"
          label="Select a subcategory"
          options={subcategoryOptions}
          onChange={handleSelectChange}
          value={selections.subcategory}
          firstText="Select subcategory"
          isHalfWidth
          required
        />
      )}
    </>
  );
};
