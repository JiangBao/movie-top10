/**
 * entry
 */
let express = require('express'),
    routes = require('./routes/index.js');

let app = express();
let port = process.env.PORT || 8888;

// routes
routes(app);

// set port, logger start
app.listen(port, () => {
  console.log(`the server start success at port ${port}`);
})
