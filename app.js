const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const mainRoutes = require('./routes/main');

// Set ejs template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Use body parser to parse body response
app.use(bodyParser.urlencoded({ extended: false }));
// Set middleware for statics ressources
app.use(express.static(path.join(__dirname, 'public')));
// Use of our main routes
app.use(mainRoutes);

app.listen(3000);
