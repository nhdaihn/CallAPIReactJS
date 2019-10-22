import React from 'react';
import HomePage from './../src/pages/HomePage/HomePage';
import NotFound from './../src/pages/NotFound/NotFound';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/NotFound',
        exact: true,
        main: () => <NotFound />
    },
];

export default routes;     