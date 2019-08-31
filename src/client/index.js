import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from '../Routes';
import { Provider } from 'react-redux';
import { getClientStore } from '../store';
import { renderRoutes } from 'react-router-config';

const App = () => (
  <Provider store={getClientStore()}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>
);

ReactDom.hydrate(<App />, document.getElementById('root'));
