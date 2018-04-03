import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from 'src/features/app';

if (document.getElementById('content')) {
    ReactDOM.render(<Portfolio />, document.getElementById('content'));
}
