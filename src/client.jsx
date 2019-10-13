import React from 'react';
import { hydrate } from 'react-dom';
import { useSSR } from 'react-i18next';
import App from './containers/app';
import setupStore from './state/store';
import './requirements/i18n';
import { clientMarkup } from './markup';

const store = setupStore(window.__PRELOADED_STATE__);

const BaseApp = () => {
	useSSR(window.initialI18nStore, window.initialLanguage);
	return (clientMarkup(store, App));
};

hydrate(
	<BaseApp />,
	document.getElementById('root'),
);

if (module.hot) {
	module.hot.accept('./containers/app');
}
