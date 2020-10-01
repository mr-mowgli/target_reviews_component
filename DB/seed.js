var faker = require('faker');
var db = require('./db.js');
var mongoose = require('mongoose');
var Reviews = require('./Reviews.js');


var generateReviews = function(numReviews) {
  var data = [];
  var uniq = 0;
  var counter = 0;

  // var generateIds = function (num) {
  //   var array = [];
  //   for (var i = 1; i <= num; i++ ) {
  //     array.push(i);
  //   }
  //   return array;
  // };

  // var productIds = generateIds(100);

  var stars = {
    'min': 1,
    'max': 5
  };
  var sizing = {
    'min': 1,
    'max': 3
  };



  for (var i = 0; i < numReviews; i++) {
    uniq++;
    counter++;
    var fakeReview = {
      _id: uniq,
      author: faker.name.firstName(),
      stars: faker.random.number(stars), // 0 through 5
      body: faker.lorem.paragraph(),
      createdAt: faker.date.recent(), // date
      wouldRecommend: faker.random.boolean(),
      title: faker.random.words(),
      comfort: faker.random.number(stars), // 0 - 5
      style: faker.random.number(stars), // 0-5
      value: faker.random.number(stars), // 0-5
      sizing: faker.random.number(sizing), // [too small, too big, true to size]
      photos: ['null'], //img links //======= TO DO ======
      helpfulVotes: faker.random.number(sizing), // number of "helpful" votes // using sizing to be 0-3 //
    }

    data.push(fakeReview);
  }
  return data;
};

const fakeReviews = generateReviews(2000);

Reviews.create(fakeReviews)
  .then(() => {
    mongoose.disconnect();
  })

