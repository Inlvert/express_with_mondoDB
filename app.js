const express = require('express');
const router = require('./routers')
const app = express();
const basicErrorHandler = require('./middlewares/errors/basic');
const tokenErrorHandler = require('./middlewares/errors/token');

app.use(express.json());
app.use(router);

app.use(tokenErrorHandler);
app.use(basicErrorHandler);

module.exports = app;