import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Minimal resources for now
const resources = {
  en: { translation: { welcome: 'Welcome to QuizConnect!' } },
  fr: { translation: { welcome: 'Bienvenue sur QuizConnect !' } },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
