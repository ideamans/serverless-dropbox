'use strict';

const expressHandler = require('serverless-express/handler');
const app = require('./app');

process.env.SERVERLESS_EXPRESS_PLATFORM = 'aws';

const handler = expressHandler(app);
module.exports.express = async(event, context) => {
  return handler(event, context, 'PROMISE').promise;
};