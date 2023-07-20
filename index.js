var express = require('express');
var app = express();

app.use(express.static('dist/frontend'));
app.get('/', function (req, res) {
  res.redirect('/')
});

app.listen(4200, () => {
  console.log('Server started!');
});
