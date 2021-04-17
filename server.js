// DEPENDENCIES
const express = require('express');

// EXPRESS CONFIGURATION
const app = express();

// PORT SETUP
const PORT = process.env.PORT || 8080;

// EXPRESS DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//ROUTER
require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

// PORT LISTENER
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });

