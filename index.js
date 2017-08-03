const express = require('express');
const yr = require('./yr.js');
const fotball = require('./fotball.js');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
  res.json({
    messages: [
      {text: "Dette er en svarmelding!"}
    ]
  });
});

app.get('/yr/idag', (req, res) => {
  yr(res);
});

app.get('/yr/imorgen', (req, res) => {
  yr(res, true);
});

app.get('/fotball', (req, res) => {
  if (req.query.lag) {
    fotball(res, req.query.lag);
  } else {
    fotball(res);
  }
});

app.listen(app.get('port'), () => {
  console.log('Tenkbot-API is running on port', app.get('port'));
});
