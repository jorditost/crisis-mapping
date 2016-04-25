// More info: http://api.crisis.net/ | https://github.com/ushahidi/crisisnet

var config = require('./../config');
var qs = require('qs');
var request = require('request');

// Example query: node items.js Syria ushahidi,facebook true true
var params = {
  //location: '36.821946,-1.292066',
  //radius: 1000,
  placeName: process.argv[2],
  sources: process.argv[3],
  after: process.argv[4],
  hasPhoto: process.argv[5],
  hasVideo: process.argv[6]
};

var query = qs.stringify(params);

request('http://api.crisis.net/item?'+query+'&apikey='+config.crisisnet.apikey, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
