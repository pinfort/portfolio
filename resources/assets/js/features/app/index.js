import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './containers/portfolio';

if (document.getElementById('content')) {
    ReactDOM.render(<Portfolio />, document.getElementById('content'));
}
