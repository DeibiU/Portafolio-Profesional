import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import englishVer from './translations/english/global.json';
import spanishVer from './translations/spanish/global.json';

i18next.init({
    interpolation: {escapeValue: true},
    lng: "eng",
    resources: {
        eng: {
            global: englishVer,
        },
        esp: {
            global: spanishVer,
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <I18nextProvider i18n = {i18next}>
            <App />
        </I18nextProvider>
    </React.StrictMode>
);
