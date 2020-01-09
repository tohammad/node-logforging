var http = require('http');
var url = require('url');

function listener(request, response){
  var val = url.parse(request.url, true)['query']['val'];
  if (isNaN(val)){
    console.log("INFO: Failed to parse val = " + val);
  }
}
http.createServer(listener).listen(8080);

// Input

// http://localhost:8080/?val=twenty-one
// http://localhost:8080/?val=twenty-one%0a%0aINFO:+User+logged+out%3dbadguy