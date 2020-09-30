const express = require('express');
const bodyParser = require('body-parser');

const Reviews = require('../DB/Reviews');

const app = express();
const port = 3001;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(__dirname + '/../Public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


app.get('/', (req, res) => {
  res.send()
});

app.get('/api/reviews', (req, res) => {
  Reviews.find({})
  .then(function(results) {
    res.send(results);
  })
})

app.get('/api/reviews/:id', (req, res) => {
  Reviews.findById(req.params.id, function(err, result) {
    if (err) {
      console.log('ERROR')
    } else {
      res.send(result)
    }
  })
});
