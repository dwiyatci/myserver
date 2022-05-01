const express = require('express');
const app = express();
const port = 9000;

const nocache = require('nocache');
const cors = require('cors');

app.use(nocache());
// app.use(cors());

app.get('/products', function (req, res, next) {
  console.log('harharhar');
  //console.log(req);

  // setTimeout(() => {
  //   res.json({ msg: 'gotcha' });
  // }, 2 * 60 * 1000);
  res.json({ msg: 'gotcha' });
});

app.get('/products/:id', function (req, res, next) {
  console.log('hi');
  //console.log(req);

  res.json({ msg: 'CORS-enabled GET success' });
});

app.post('/products', function (req, res, next) {
  console.log('ho');

  res.json({ msg: 'CORS-enabled POST success' });
});

app.put('/products', function (req, res, next) {
  console.log('he');

  res.json({ msg: 'CORS-enabled PUT success' });
});

app.get('/', (req, res) => {
  // res.setHeader('Cache-Control', 'no-cache, no-store');
  return res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
