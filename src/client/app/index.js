import React from 'react';
import { hydrate } from 'react-dom';
import { render } from 'react-dom';
import App from './App';

const root = (
  <App />
);

hydrate(App, document.getElementById('app'));
