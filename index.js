const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

app.engine('ejs', ejs.renderFile);
app.use('/assets', express.static('assets'));

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (request, response) => {
  response
    .render('index.ejs');
});

app.get('/beaune/:etage', (request, response) => {
  const etage = request.params.etage;
  response
    .render('etage.ejs', { etage });
});

app.get('/login', (request, response) => {
  response.render('login.ejs', { user: null })
});

app.post('/login', urlencodedParser, (request, response) => {
  const user = request.body.username;
  response.render('login.ejs', { user });
})

app.listen(8080);
