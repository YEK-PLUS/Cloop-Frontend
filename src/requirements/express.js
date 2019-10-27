import express from 'express';
import serialize from 'serialize-javascript';
import {renderToString} from 'react-dom/server';
import i18nsetup from './i18nServer';
import {serverMarkup, serverHTMLMarkup} from '../markup';

const setupExpress = (src, store, App, assets) => {
  const server = i18nsetup(src, express(), (serv) => {
    serv
        .disable('x-powered-by')
        .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
        .get('/*', (req, res) => {
          const context = {};
          const markup = renderToString(
              serverMarkup(
                  store,
                  req.i18n,
                  context,
                  req.url,
                  App,
              ),
          );
          const finalState = store.getState();
          const {url} = context;

          if (url) {
            res.redirect(url);
          } else {
            const initialI18nStore = {};
            req.i18n.languages.forEach((l) => {
              initialI18nStore[l] = req.i18n.services.resourceStore.data[l];
            });
            const initialLanguage = req.i18n.language;
            res.status(200).send(
                serverHTMLMarkup(
                    assets.client.js,
                    serialize(finalState),
                    initialI18nStore,
                    initialLanguage,
                    markup,
                ),
            );
          }
        });
  });
  return server;
};

export default setupExpress;
