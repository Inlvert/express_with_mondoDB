const express = require('express');
const cors = require('cors');
const router = require('./routers')
const app = express();
const basicErrorHandler = require('./middlewares/errors/basic');
const tokenErrorHandler = require('./middlewares/errors/token');

app.use(cors());
app.use(express.json());
app.use(router);

app.use(tokenErrorHandler);
app.use(basicErrorHandler);

module.exports = app;