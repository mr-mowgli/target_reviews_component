const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tarjay-reviews',
});

const getReviews = (inputId, callback) => {
  if (inputId=99999999) {
    const query = `SELECT recordid, author, stars, body, createdat, wouldrecommend, title, comfort, style, productvalue, sizing, helpfulvotes, productid FROM reviews`;
  } else {
    const query = `SELECT recordid, author, stars, body, createdat, wouldrecommend, title, comfort, style, productvalue, sizing, helpfulvotes, productid FROM reviews WHERE productid=${inputId}`;
  }

  (async () => {
    const {rows} = await pool.query(query);
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

const postReview = (params, callback) => {
  const queryString = `INSERT INTO reviews(recordid, author, stars, body, createdat, wouldrecommend, title, comfort, style, productvalue, sizing, helpfulvotes, productid) VALUES (${params._id}, ${params.author}, ${params.stars}, ${params.body}, ${params.createdAt}, ${params.wouldRecommend}, ${params.title}, ${params.comfort}, ${params.style}, ${params.productValue}, ${params.sizing}, ${params.helpfulVotes}, ${params.productId})`;

  pool.query(queryString, (err, data =>) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

const deleteReview = (inputId, callback)=> {
  const queryString = `DELETE FROM person WHERE recordid = ${inputId}`;

  pool.query(queryString, (err, data =>) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

const editReview = (inputId, updateObj, callback) => {
  const queryString = `UPDATE reviews SET stars = ${updateObj.stars}, body = ${updateObj.body}, wouldrecommend = ${updateObj.wouldRecommend}, title = ${updateObj.title}, comfort = ${updateObj.comfort}, style = ${updateObj.style}, productvalue = ${productValue}, sizing = ${updateObj.sizing} WHERE recordid = ${inputId}`;

  pool.query(queryString, (err, data =>) {
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