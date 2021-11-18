const express = require('express');
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;

app.use(express.static('dist'));

app.get('/health', (request, response) => {
  response.send('All systems are green!');
});

app.get('/version', (request, response) => {
  response.send('1.0.4');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000');
});
