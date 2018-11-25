import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.min.js';
import '../style/index.scss';

import App from "./App";
import store from './store';

// setup fake backend
import { configureFakeBackend } from './utils/fake-backend';
configureFakeBackend();

const AppLPA = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

render(<AppLPA />, document.getElementById('app'));
