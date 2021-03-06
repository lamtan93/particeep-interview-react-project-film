import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/store';
import { Provider, } from 'react-redux';
import ListFilmHomePage from './components/pages/ListFilmHomePage';

const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ListFilmHomePage />
    </Provider>

 );
