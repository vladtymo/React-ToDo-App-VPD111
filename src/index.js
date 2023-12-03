import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { NextUIProvider } from "@nextui-org/react";
import { ContextProvider } from './contexts/counter.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <NextUIProvider>
            <ContextProvider>
                <App />
            </ContextProvider>
        </NextUIProvider>
    </BrowserRouter>
    // </React.StrictMode>
);
