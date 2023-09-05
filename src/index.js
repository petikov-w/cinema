
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store/store';
import './index.css';
import './assets/fonts/Fonts.imports';
import { App } from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>

);
