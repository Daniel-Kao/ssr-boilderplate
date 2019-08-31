const express = require('express');
const path = require('path');
import { matchRoutes } from 'react-router-config';
const app = express();
import { render } from './util';
import { getStore } from '../store';
import routes from '../Routes';
var proxy = require('express-http-proxy');

const store = getStore();

app.use(express.static('public'));

app.use(
  '/todos',
  proxy('https://jsonplaceholder.typicode.com', {
    proxyReqPathResolver: function(req) {
      return '/todos' + req.url;
    },
  }),
);

app.get('*', function(req, res) {
  const matchedRoutes = matchRoutes(routes, req.path);

  const promises = [];

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises).then(() => {
    res.send(render(store, routes, req));
  });
});

app.listen(3000, function() {
  console.log('server listening on port 3000');
});
