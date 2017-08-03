var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.json({
    messages: [
      {text: "Dette er en svarmelding!"}
    ]
  });
});

app.listen(app.get('port'), function() {
  console.log('Tenkbot-API is running on port', app.get('port'));
});
