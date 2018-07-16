import React from 'react';
import { render } from 'react-dom';
import Router from './router/router';
import 'normalize.css';

render(
    <Router />,
    document.getElementById('app')
);
