import '@babel/polyfill';

import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

render(
    <App />,
    document.querySelector('#root')
);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
}