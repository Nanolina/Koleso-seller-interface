import { TFunction } from 'i18next';
import { LanguageType } from '../../types';

export const createLanguageOptions = (
  t: TFunction<'translation', undefined>
) => {
  return Object.keys(LanguageType)
    .filter((key) => isNaN(Number(key)))
    .map((key) => ({
      name: key,
      label: t(key),
    }));
};
