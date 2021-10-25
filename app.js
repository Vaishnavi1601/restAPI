const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()); //x-www-form-urlencoded <form>

//we need this middleware to parse incoming json data so that we are able to extract it on the body
app.use(bodyParser.json()); //application.json

app.use('/feed', feedRoutes);

app.listen(8080);     