import Backend from 'i18next-node-fs-backend';
import i18nextMiddleware from 'i18next-express-middleware';
import express from 'express';
import i18n from './i18n';

const setupOptions = (src) => ({
  debug: false,
  preload: ['en', 'tr'],
  ns: ['main', 'login', 'birthday'],
  defaultNS: 'main',
  backend: {
    loadPath: `${src}/locales/{{lng}}/{{ns}}.json`,
    addPath: `${src}/locales/{{lng}}/{{ns}}.missing.json`,
  },
});
const i18nsetup = (src, server, callback) => {
  i18n
      .use(Backend)
      .use(i18nextMiddleware.LanguageDetector)
      .init(
          setupOptions(src),
          () => {
            server
                .use(i18nextMiddleware.handle(i18n))
                .use('/locales', express.static(`${src}/locales`));
            callback(server);
          },
      );
  return server;
};
export default i18nsetup;
