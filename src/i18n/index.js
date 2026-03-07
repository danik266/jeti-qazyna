import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationRU from './locales/ru.json';
import translationKZ from './locales/kz.json';

const resources = {
    ru: {
        translation: translationRU,
    },
    kz: {
        translation: translationKZ,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ru', // default language
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
