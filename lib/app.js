const express = require('express');
const cors = require('cors');
const client = require('./client.js');
require('dotenv').config();

const { mungeLocation } = require('../data/munge-location.js');
const app = express();
const morgan = require('morgan');
// const port = process.env.PORT || 3000;

const request = require('superagent');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('dev')); // http logging


app.get('/location', async (req, res) => {
  try {
    const URL = `https://us1.locationiq.com/v1/search.php?key=pk.ad0c4886627111abfa973fad889bcbfc&q=${req.query.search}&format=json`;

    const response = await request.get(URL);

    const newResponse = mungeLocation(response.body);



    res.json(newResponse);
  } catch (e) {
    res.json({ error: e.message });
  }
});


module.exports = app;

