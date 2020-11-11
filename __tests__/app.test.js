require('dotenv').config();
// const { execSync } = require('child_process');
const { mungeLocation } = require('../data/munge-location.js');
const { mungeTrails } = require('../data/munge-trails.js');
const { mungeWeather } = require('../data/munge-weather.js');
const { mungeYelp } = require('../data/munge-yelp.js');

// const fakeRequest = require('supertest');
// const app = require('../lib/app');
// const client = require('../lib/client');

// describe('app routes', () => {
//   describe('routes', () => {
//     let token;

//     beforeAll(async done => {
//       execSync('npm run setup-db');

//       client.connect();

//       const signInData = await fakeRequest(app)
//         .post('/auth/signup')
//         .send({
//           email: 'jon@user.com',
//           password: '1234'
//         });

//       token = signInData.body.token;

//       return done();
//     });

//     afterAll(done => {
//       return client.end(done);
//     });

test('returns location', async () => {

  const expectation =
  {
    formatted_query: 'Sibay, городской округ Сибай, Bashkortostan, Volga Federal District, UNDEFINED, Russia',
    latitude: '52.7206093188075',
    longitude: '58.6657536770277',
  };
  const input = [
    {
      display_name: 'Sibay, городской округ Сибай, Bashkortostan, Volga Federal District, UNDEFINED, Russia',
      lat: '52.7206093188075',
      lon: '58.6657536770277',
    }];


  const output = mungeLocation(input);

  expect(output).toEqual(expectation);
});
test('returns trail', async () => {

  const expectation =

    [{

      name: 'trail',
      location: 'trail',
      length: 'trail',
      stars: 'trail',
      star_votes: 'trail',
      summary: 'trail',
      trail_url: 'trail',
      conditions: 'trail',
      condition_date: 'trail',
      condition_time: undefined,

    }];
  const input = {
    trails: [

      {


        name: 'trail',
        location: 'trail',
        length: 'trail',
        stars: 'trail',
        star_votes: 'trail',
        summary: 'trail',
        trail_url: 'trail',
        conditions: 'trail',
        condition_date: 'trail',
        condition_time: undefined,
      }
    ]
  };


  const output = mungeTrails(input);

  expect(output).toEqual(expectation);
});

test('returns weather', async () => {

  const expectation =

    [{

      forecast: 'cloudy with a chance of meatballs',
      time: '11-10-2020',

    }];
  const weatherObj = {
    data: [{
      weather:
        { description: 'cloudy with a chance of meatballs' },
      datetime: '11-10-2020'
    }]
  };


  const output = mungeWeather(weatherObj);

  expect(output).toEqual(expectation);
});

test('returns yelp', async () => {

  const expectation =

    [{

      name: 'yelp',
      image_url: 'yelp',
      price: 'yelp',
      rating: 'yelp',
      url: 'yelp',


    }];
  const input = {
    businesses: [

      {

        name: 'yelp',
        image_url: 'yelp',
        price: 'yelp',
        rating: 'yelp',
        url: 'yelp',
      }
    ]
  };


  const output = mungeYelp(input);

  expect(output).toEqual(expectation);
});
