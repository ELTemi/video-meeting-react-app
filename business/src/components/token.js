/*function accessToken() {
  var AccessToken = require('twilio').jwt.AccessToken;
  var VideoGrant = AccessToken.VideoGrant;

  // Substitute your Twilio AccountSid and ApiKey details
  var ACCOUNT_SID = 'ACf2da7013b8086aa3a3d47c9789a81489';
  var API_KEY_SID = 'SKbf09983196a833f227743c23e79a82db';
  var API_KEY_SECRET = 'NnATgOSdKsxgz5OWf73HWW5EnSNMuKuO';

  // Create an Access Token
  var accessToken = new AccessToken(
    ACCOUNT_SID,
    API_KEY_SID,
    API_KEY_SECRET
  );

  // Set the Identity of this token
  accessToken.identity = 'example-user';

  // Grant access to Video
  var grant = new VideoGrant();
  grant.room = 'Temi';
  accessToken.addGrant(grant);

  // Serialize the token as a JWT
  var jwt = accessToken.toJwt();
  console.log(jwt);
}

export default accessToken;*/
