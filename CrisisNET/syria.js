// This example loads everything related to Syria from the CrisisNET API
// More info: http://api.crisis.net/ | https://github.com/ushahidi/crisisnet

var config = require('./../config');
var request = require('request');

request('http://api.crisis.net/item?placeName=Syria&after=2015-01-01T00:00:00.000Z&apikey='+config.crisisnet.apikey, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
