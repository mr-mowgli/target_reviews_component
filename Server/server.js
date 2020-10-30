require('newrelic');
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');

const postgres = require('../DB/postgres');

const app = express();
const port = process.env.PORT;

const whitelist = [process.env.WHITELIST];

var corsOptions = {
  origin: (origin, cb) => {
    var originCheck = whitelist.indexOf(origin) !== -1;
    cb(null, originCheck);
  },
  credentials: true
}
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../Public'));

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`);
});

app.get('/loaderio-*', async (req, res) => {
  res.status(200).send(req.originalUrl.slice(1, -1));
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
      res.status(200).json({
        _id: result.rows[0].recordid,
        author: result.rows[0].author,
        stars: result.rows[0].stars,
        body: result.rows[0].body,
        createdAt: result.rows[0].createdat,
        wouldRecommend: result.rows[0].wouldrecommend,
        title: result.rows[0].title,
        comfort: result.rows[0].comfort,
        style: result.rows[0].style,
        productValue: result.rows[0].productvalue,
        sizing: result.rows[0].sizing,
        helpfulVotes: result.rows[0].helpfulvotes,
        productId: result.rows[0].productid
      });
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


