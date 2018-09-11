require("dotenv").config();
var path = require("path");
var express = require("express");
var webpack = require("webpack");
var faker = require("faker");
var AccessToken = require('twilio').jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;
var accountSid = 'ACf2da7013b8086aa3a3d47c9789a81489'
var authToken = 'f45f5fb91319427c9f957aca6f9b8839'
var client = require('twilio')(accountSid, authToken);
//console.log(require('twilio')(accountSid, authToken))

var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
if(process.env.NODE_ENV === "DEV") { // Configuration for development environment
    var webpackDevMiddleware = require("webpack-dev-middleware");
    var webpackHotMiddleware = require("webpack-hot-middleware");
    var webpackConfig = require("./webpack.config.js");
    const webpackCompiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(webpackCompiler, {
      hot: true
    }));
    app.use(webpackHotMiddleware(webpackCompiler));
    app.use(express.static(path.join(__dirname, "business/src")));
} else if(process.env.NODE_ENV === "PROD") { // Configuration for production environment
    app.use(express.static(path.join(__dirname, "dist")));
}

app.get('/token', function(request, response) {
   var identity = faker.name.findName();

   // Create an access token which we will sign and return to the client,
   // containing the grant we just created
   var token = new AccessToken(
       process.env.TWILIO_ACCOUNT_SID,
       process.env.TWILIO_API_KEY,
       process.env.TWILIO_API_SECRET
   );

   // Assign the generated identity to the token
   token.identity = identity;

   const grant = new VideoGrant();
   // Grant token access to the Video API features
   token.addGrant(grant);

   // Serialize the token to a JWT string and include it in a JSON response
   response.send({
      identity: identity,
      token: token.toJwt()
   });
});

app.get('/rooms', function(request, response) {
  client.video.rooms.each({
                     status: 'completed'
                   },
                      rooms => response.send({
                        rooms: rooms
                   }));
});

var port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log("Express server listening on *:" + port);
});

/*app.get('/rooms', function(request, response) {
  client.video.rooms.list().then(rooms => response.send({
       rooms: rooms
   }))
});*/
