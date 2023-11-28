import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './en.json';
import ruTranslation from './ru.json';

i18n.use(initReactI18next).init({
  resources: {
    English: {
      translation: enTranslation,
    },
    Russian: {
      translation: ruTranslation,
    },
  },
  compatibilityJSON: 'v3',
  lng: 'English',
  fallbackLng: 'Russian',
  // debug: true,
});

export default i18n;
