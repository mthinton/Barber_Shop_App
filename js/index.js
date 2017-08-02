require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';

document.addEventListener('DOMContentLoaded', () => 
	ReactDOM.render(<Main />, document.getElementById('app'))
);

