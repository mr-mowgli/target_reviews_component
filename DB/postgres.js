const { Pool } = require('pg');
require('dotenv').config()

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  password: process.env.POSTGRES_PASSWORD,
  database: 'tarjay-reviews',
});

const getReviews = (inputId, callback) => {
  let queryString;
  let params = [];

  if (inputId === 0) {
    queryString = `SELECT recordid, author, stars, body, createdat, wouldrecommend, title, comfort, style, productvalue, sizing, helpfulvotes, productid FROM reviews`;
  } else {
    queryString = `SELECT recordid, author, stars, body, createdat, wouldrecommend, title, comfort, style, productvalue, sizing, helpfulvotes, productid FROM reviews WHERE productid=$1`;

    params = [inputId];
  }

  (async () => {
    const {rows} = await pool.query(queryString, params);
    let reviews = [];
    for (review of rows) {
      reviews.push({
        _id: review.recordid,
        author: review.author,
        stars: review.stars,
        body: review.body,
        createdAt: review.createdat,
        wouldRecommend: review.wouldrecommend,
        title: review.title,
        comfort: review.comfort,
        style: review.style,
        productValue: review.productvalue,
        sizing: review.sizing,
        helpfulVotes: review.helpfulvotes,
        productId: review.productid
      });
    }
    callback(null, reviews);
  })().catch(err => {
    console.error(err);
    callback(err, null);
  });
}

const postReview = async (params, callback) => {
  const queryString = `INSERT INTO reviews (author, stars, body, createdat, wouldrecommend, title, comfort, style, productvalue, sizing, helpfulvotes, productid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING recordid, author, stars, body, createdat, wouldrecommend, title, comfort, style, productvalue, sizing, helpfulvotes, productid`;

  let sqlParams = [ params.author, params.stars, params.body, params.createdAt, params.wouldRecommend, params.title, params.comfort, params.style, params.productValue, params.sizing, params.helpfulVotes, params.productId ];

  pool.query(queryString, sqlParams, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

const deleteReview = (inputId, callback)=> {
  const queryString = 'DELETE FROM reviews WHERE recordid = $1';

  const params = [inputId];

  pool.query(queryString, inputId, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

const editReview = (inputId, updateObj, callback) => {
  const queryString = 'UPDATE reviews SET stars = $1, body = $2, wouldrecommend = $3, title = $4, comfort = $5, style = $6, productvalue = $7, sizing = $8 WHERE recordid = $9';

  const params = [updateObj.stars, updateObj.body, updateObj.wouldRecommend, updateObj.title, updateObj.comfort, updateObj.style, productValue, updateObj.sizing, inputId];

  pool.query(queryString, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

module.exports.getReviews = getReviews;
module.exports.postReview = postReview;
module.exports.deleteReview = deleteReview;
module.exports.editReview = editReview;