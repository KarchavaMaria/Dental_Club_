import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import {ToastContainer} from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop/>
            <App/>
            <ToastContainer />
        </BrowserRouter>
    </React.StrictMode>
);