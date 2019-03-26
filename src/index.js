import React from 'react';
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import './index.css';
import { Provider } from 'react-redux';
import { Store } from './store';

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>
, document.getElementById('root'));
