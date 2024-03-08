import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../languages/en/translation.json';
import sw from '../languages/sw/translation.json';
import es from '../languages/es/translation.json';
import fr from '../languages/fr/translation.json';

export const i18nProvider = () => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: true,
      fallbackLng: 'en-US',
      resources: {
        en: { translation: en },
        sw: { translation: sw },
        es: { translation: es },
        fr: { translation: fr },
      },
    });
};
