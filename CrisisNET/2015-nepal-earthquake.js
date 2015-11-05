// This example loads everything related to Syria from the CrisisNET API
// More info: http://api.crisis.net/ | https://github.com/ushahidi/crisisnet

var config = require('./../config');
var qs = require('qs');
var request = require('request');

// Example query: node items.js Syria ushahidi,facebook true true
// request('http://api.crisis.net/item?location=85.3239605,27.7172453&distance=2000&after=2015-04-24&before=2015-05-19&apikey='+config.crisisnet.apikey, function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })

var params = {
  location: '85.3239605,27.7172453',
  distance: 2000000, //2000km
  //placeName: "Nepal",
  before: '2015-05-19',
  after: '2015-04-24'
};

var query = qs.stringify(params);

request('http://api.crisis.net/item?'+query+'&apikey='+config.crisisnet.apikey, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.

    //var json = qs.parse(body);
    //console.log(json);
  }
})
