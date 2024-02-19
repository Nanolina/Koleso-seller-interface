/* eslint-disable eqeqeq */
import { ICategoryType, ISectionType } from './types';

/**
 * Retrieves options for the select elements based on the current selection and the type of options needed.
 * @param {ISectionType[]} data - The type data of catalog from DB.
 * @param {('categories' | 'subcategories')} type - The type of options to retrieve.
 * @param {string} selectedId - The ID of the selected section or category to filter options.
 * @returns An array of either categories or subcategories based on the type and selectedId.
 */
export const getOptions = (
  data: ISectionType[],
  type: 'categories' | 'subcategories',
  selectedId?: number
) => {
  if (type === 'categories') {
    // Find the section by ID and return its categories, or an empty array if not found
    return data.find((item) => item.id == selectedId)?.categories || [];
  } else {
    // Assume the type is 'subcategories'
    // Flatten the categories array to search for the selected category across all sections
    const category = data
      .flatMap((section) => section.categories || [])
      .find((category) => category.id == selectedId) as ICategoryType; // Explicitly cast to ICategoryType

    // Return the subcategories of the found category, or an empty array if not found
    return category?.subcategories || [];
  }
};

export const updateLocalStorage = (newParameters: any) => {
  const currentData = JSON.parse(localStorage.getItem('product') || '{}');
  currentData['parameters'] = newParameters;
  localStorage.setItem('product', JSON.stringify(currentData));
};
