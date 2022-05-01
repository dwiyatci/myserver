const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const helmet = require('helmet');
// const nocache = require('nocache');

const app = express();
// const serverOptions = {
//   cert: fs.readFileSync('./ssl/server.crt.pem'),
//   key: fs.readFileSync('./ssl/server.key.pem'),
// };
// const { key, cert } = require('self-signed-cert');
// const serverOptions = {
//   key,
//   cert,
// };

// app.use(nocache());
// app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());

app.use(setCookies);

app.get('/hello', function (req, res) {
  // res.cookie('whoami', 'glenn');
  // res.cookie('yummy_cookie', 'choco');
  // res.cookie('tasty_cookie', 'strawberry');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/foo', function (req, res) {
  res.send('foo bar baz qux');
});

app.get('/', function (req, res) {
  // res.send('hello, world');
  res.sendFile(path.join(__dirname, 'index2.html'));
});

function setCookies(req, res, next) {
  res.cookie('whoami', 'glenn');
  res.cookie('yummy_cookie', 'choco');
  res.cookie('tasty_cookie', 'strawberry');

  next();
}

http.createServer(app).listen(9000, () => {
  console.log(`Listening at http://localhost:9000`);
});
// http.createServer(app).listen(80);
// https.createServer(serverOptions, app).listen(9000, () => {
//   console.log(`Listening at https://localhost:9000`);
// });
// https.createServer(serverOptions, app).listen(443);
