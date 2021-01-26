const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const eventsRoutes = require('./routes/events');
const userRoutes = require('./routes/user');
const keys = require('./config/keys');

const app = express();

mongoose.connect(keys.mongoDB, {useNewUrlParser: true} )
  .then(() =>console.log('MongoDB connected.'))
  .catch((error) => {
    console.log(error);
  })

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/user', userRoutes)
app.use('/api/events', eventsRoutes)

module.exports = app;