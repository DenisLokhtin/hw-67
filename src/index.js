import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from "redux";
import reducer from "./Store/reducer";
import {Provider} from "react-redux";
import App from './App';

const store = createStore(reducer)

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

