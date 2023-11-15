import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../assets/languages/en.json';
import vi from '../assets/languages/vi.json';

export const languagesResources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};
i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languagesResources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
