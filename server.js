var http = require('http');
var url = require('url');
const log4js = require('log4js');
var logger = log4js.getLogger('server');
logger.level = 'debug';

function cleanLogString1(logString) {
    let clean = logString.replace( '\n', '_' ).replace( '\r', '_' );
    return clean;
}
function cleanLogString2(logString) {
    let clean = logString.replace(/[\n\r]+/g, '_');
    return clean;
}
function listener(request, response){
  var val = url.parse(request.url, true)['query']['val'];
  if (isNaN(val)){
    logger.debug("INFO: Failed to parse val = " + val);
    logger.debug("INFO: Failed to parse val = " + cleanLogString1(val));
    logger.debug("INFO: Failed to parse val = " + cleanLogString2(val));
  }
}
http.createServer(listener).listen(8080);

// Input

// http://localhost:8080/?val=twenty-one
// http://localhost:8080/?val=twenty-one%0a%0aINFO:+User+logged+out%3dbadguy