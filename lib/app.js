require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const client = require('./client.js');


const { mungeLocation } = require('../data/munge-location.js');
const { mungeWeather } = require('../data/munge-weather.js');
const { mungeYelp } = require('../data/munge-yelp.js');
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
    const URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_KEY}&q=${req.query.search}&format=json`;

    const response = await request.get(URL);

    const newResponse = mungeLocation(response.body);



    res.json(newResponse);
  } catch (e) {
    res.json({ error: e.message });
  }
});

app.get('/weather', async (req, res) => {
  try {
    const URL = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${req.query.latitude}&lon=${req.query.longitude}&key=${process.env.WEATHER_KEY}`;

    const response = await request.get(URL);

    const newResponse = mungeWeather(response.body);



    res.json(newResponse);
  } catch (e) {
    res.json({ error: e.message });
  }
});

app.get('/reviews', async (req, res) => {
  try {
    const URL = `https://api.yelp.com/v3/businesses/search?latitude=${req.query.latitude}&longitude=${req.query.longitude}`;

    const response = await request.get(URL).set({ 'Authorization': `Bearer ${process.env.YELP_KEY}` });

    const newResponse = mungeYelp(response.body);



    res.json(newResponse);
  } catch (e) {
    res.json({ error: e.message });
  }

});


module.exports = app;

