import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import es from '../../locales/common/es.json';
import en from '../../locales/common/en.json';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next) // bind react-i18next to the instance
    .init({
        fallbackLng: i18n.language,
        debug: true,
        lng: 'es',
        resources: {
            en: { translation: en },
            es: { translation: es },
        },
    });

export default i18n;
