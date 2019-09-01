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
  '/api',
  proxy('http://139.9.205.72', {
    proxyReqPathResolver: function(req) {
      return '/api' + req.url;
    }
  })
);

app.get('*', function(req, res) {
  const matchedRoutes = matchRoutes(routes, req.path);

  const promises = [];

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route
          .loadData(store)
          .then(resolve)
          .catch(resolve);
      });
      promises.push(promise);
    }
  });

  Promise.all(promises).then(() => {
    const context = {};
    const html = render(store, routes, req, context);
    console.log(context);
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url);
    } else if (context.NOT_FOUND) {
      res.status(404).send(html);
    } else {
      res.send(html);
    }
  });
});

app.listen(3000, function() {
  console.log('server listening on port 3000');
});
