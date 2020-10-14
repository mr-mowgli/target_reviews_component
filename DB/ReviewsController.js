const Reviews = require('../DB/Reviews');

const getAll = (callback) => {
  Reviews.find({})
  .then(results => callback(null, results))
  .catch(err => callback(err, null));
}

const getById = (id, callback) => {
  Reviews.find({ productId : `${id} ` }, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
}

module.exports.getAll = getAll;
module.exports.getById = getById;