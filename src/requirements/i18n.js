import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import {RestAPI} from '../api';

const options = {
  fallbackLng: 'en',
  load: 'languageOnly',
  ns: ['main', 'login', 'birthday'],
  defaultNS: 'main',

  saveMissing: true,
  debug: false,

  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
    format: (value, format) => {
      if (format === 'uppercase') return value.toUpperCase();
      return value;
    },
  },
  wait: process && !process.release,
};
if (process && !process.release) {
  i18n
      .use(XHR)
      .use(initReactI18next)
      .use(LanguageDetector);
}

if (!i18n.isInitialized) {
  i18n.init(options);
}
const extendedTranslate = async () => {
  const translations = await RestAPI('/translate');
  translations.forEach((data) => {
    data.translates.forEach((translate) => {
      const t = {};
      t[data.word] = translate.translated_word;
      i18n.addResources(translate.lang, options.ns[0], t);
    });
  });
};
extendedTranslate();
export default i18n;
