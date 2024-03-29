const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base.js');
var nodeExternals = require('webpack-node-externals');

const serverConfig = {
  target: 'node',
  externals: [nodeExternals()],
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
};

module.exports = merge(config, serverConfig);
