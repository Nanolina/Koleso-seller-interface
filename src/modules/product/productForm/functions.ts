/* eslint-disable eqeqeq */

import { TFunction } from 'i18next';
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
  t: TFunction<'translation', undefined>,
  selectedId?: number
) => {
  let options = [];

  if (type === 'categories') {
    // Find the section by ID and put to arr its categories, or an empty array if not found
    options = data.find((item) => item.id == selectedId)?.categories || [];
  } else {
    // Assume the type is 'subcategories'
    // Flatten the categories array to search for the selected category across all sections
    const category = data
      .flatMap((section) => section.categories || [])
      .find((category) => category.id == selectedId) as ICategoryType; // Explicitly cast to ICategoryType

    // Put to arr subcategories of the found category, or an empty array if not found
    options = category?.subcategories || [];
  }

  return sortTranslatedCatalogItems(options, t);
};

// Translate functions
// Categories and subcategories
const sortTranslatedCatalogItems = (
  entities: any,
  t: TFunction<'translation', undefined>
) => {
  return entities
    .map((entity: any) => ({
      ...entity,
      name: t(`catalog.${entity.name}`),
    }))
    .sort((a: any, b: any) => a.name.localeCompare(b.name));
};

// Sections
export const sortTranslatedSections = (
  sections: ISectionType[],
  t: TFunction<'translation', undefined>
) => {
  return sections
    .map((section) => ({
      ...section,
      name: t(`catalog.${section.name}`),
    }))
    .sort((a, b) =>
      t(`catalog.${a.name}`).localeCompare(t(`catalog.${b.name}`))
    );
};

// Materials
export const sortTranslatedEntities = (
  entities: any,
  translationPath: string,
  t: TFunction<'translation', undefined>
) => {
  return entities
    .map((entity: any) => ({
      name: t(`${translationPath}.${entity}`),
      value: entity,
    }))
    .sort((a: any, b: any) => a.name.localeCompare(b.name));
};
