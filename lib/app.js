const express = require('express');
const cors = require('cors');
const client = require('./client.js');
const mungeLocation = require('./data/munge-location.js');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 3000;

const request = require('superagent');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging

app.get('/location', async (req, res) => {
  try {
    const URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_KEY}&q=${req.query.location}&format=json`;

    const response = await request.get(URL);

    const newResponse = mungeLocation(response.body);



    res.json(newResponse);
  } catch (e) {
    res.json({ error: e.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
