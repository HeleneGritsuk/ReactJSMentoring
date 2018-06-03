const clientConfig = require('./webpack.dev.config');
const serverConfig = require('./webpack.config.server');

module.exports = [clientConfig, serverConfig];
