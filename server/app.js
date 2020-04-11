/**
 * entry
 */
const express = require('express');
const routes = require('./routes/index.js');

const app = express();
const port = process.env.PORT || 8888;

// routes
routes(app);

// set port, logger start
app.listen(port, () => {
  console.log(`the api server start success at http://localhost:${port}`);
});
