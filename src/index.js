import React from 'react';
import  {createRoot} from 'react-dom/client';
import './assets/Styled/App.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/redux";
import './firebase/firebase';




const root = createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

