const express = require('express');
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
  res.json({
    messages: [
      {text: "Kan være greit å ha med paraply i dag! ☔"}
    ]
  });
});

app.listen(app.get('port'), () => {
  console.log('Tenkbot-API is running on port', app.get('port'));
});
