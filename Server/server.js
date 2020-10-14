const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');

const Reviews = require('../DB/Reviews');
const ReviewsController = require('../DB/ReviewsController');

const app = express();
const port = 3004;

const whitelist = ['http://localhost:3004'];

var corsOptions = {
  origin: (origin, cb) => {
    var originCheck = whitelist.indexOf(origin) !== -1;
    cb(null, originCheck);
  },
  credentials: true
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(__dirname + '/../Public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/api/reviews', (req, res) => {
  ReviewsController.getAll((err, results) => {
    if (err) {
      console.log('ERROR');
      throw new Error;
    } else {
      res.send(results);
    }
  });
})

app.get('/:id', (req, res) => {
  ReviewsController.getById(req.params.id, (err, result) => {
    if (err) {
      console.log('ERROR');
      throw new Error();
    } else {
      res.sendFile(path.resolve('./Public/index.html'));
    }
  })
});

app.get('/api/reviews/:id', (req, res) => {
  ReviewsController.getById(req.params.id, (err, result) => {
    if (err) {
      console.log('ERROR');
      throw new Error();
    } else {
      res.send(result);
    }
  });
});

app.post('/api/reviews', (req, res) => {
  ReviewsController.createReview(req.body, (err, result) => {
    if (err) {
      console.log('ERROR');
      throw new Error();
    } else {
      res.send(result);
    }
  })
});

app.put('/api/reviews/:id', (req, res) => {
  db.updateById(req.params.id, req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
});

app.delete('/api/reviews/:id', (req, res) => {
  ReviewsController.deleteById({
    product: product,
    url: url},
    (err, result) => {
      if (err) {
        console.log('ERROR');
        throw new Error;
      } else {
        res.send(result);
      }
    })
})
