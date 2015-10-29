// CrisisNET API Example
// More info: http://api.crisis.net/ | https://github.com/ushahidi/crisisnet

var config = require('./../config');
var request = require('request');

request('http://api.crisis.net/source?apikey='+config.crisisnet.apikey, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
