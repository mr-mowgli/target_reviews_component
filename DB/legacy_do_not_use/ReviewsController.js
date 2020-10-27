const Reviews = require('../DB/Reviews');

const getAll = (callback) => {
  Reviews.find({})
  .then(results => callback(null, results))
  .catch(err => callback(err, null));
}

const getById = (id, callback) => {
  Reviews.find({ productId : `${id}` }, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}

const deleteById = (id, callback) => {
  Reviews.deleteOne({ productId: `${id}` }, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}

const createReview = (review, callback) => {
  Reviews.create(review, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}

const updateById = (id, updateObj, callback) => {
  Reviews.findOneAndUpdate({id : `${id}`}, updateObj, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.deleteById = deleteById;
module.exports.updateById = updateById;
module.exports.createReview = createReview;