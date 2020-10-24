const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');

// const Reviews = require('../DB/Reviews');
// const ReviewsController = require('../DB/ReviewsController');
const postgres = require('../DB/postgres');

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
  postgres.getReviews(0, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send();
    } else {
      res.send(results);
    }
  });
})

app.get('/:id', (req, res) => {
  postgres.getReviews(req.params.id, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send();
    } else {
      res.sendFile(path.resolve('./Public/index.html'));
    }
  })
});

app.get('/api/reviews/:id', (req, res) => {
  postgres.getReviews(req.params.id, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send();
    } else {
      res.send(result);
    }
  });
});

app.post('/api/reviews', (req, res) => {
  postgres.postReview(req.body, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send();
    } else {
      res.send(result);
    }
  })
});

app.put('/api/reviews/:id', (req, res) => {
  postgres.editReview(req.params.id, req.body, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send();
    } else {
      res.send(result);
    }
  })
});

app.delete('/api/reviews/:id', (req, res) => {
  postgres.deleteReview(req.params.id,
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send();
      } else {
        res.send(result);
      }
    })
})
