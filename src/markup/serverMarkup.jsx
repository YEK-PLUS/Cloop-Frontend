import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { StaticRouter } from 'react-router-dom';

const serverMarkup = (store, i18n, context, url, App) => (
	<Provider store={store}>
		<I18nextProvider i18n={i18n}>
			<StaticRouter context={context} location={url}>
				<App />
			</StaticRouter>
		</I18nextProvider>
	</Provider>
);

export default serverMarkup;
