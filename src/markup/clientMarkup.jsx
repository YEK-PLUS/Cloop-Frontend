import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const clientMarkup = (store, App) => (
	<Provider store={store}>
		<Suspense fallback={<div>Still loading i18n...</div>}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Suspense>
	</Provider>
);
export default clientMarkup;
