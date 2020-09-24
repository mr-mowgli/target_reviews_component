var faker = require('faker')

var data = [];
var entryNum = 50;
var uniq = 0;
var stars = {
  'min': 1,
  'max': 5
};
var sizing = {
  'min': 1,
  'max': 3
};

for (var i = 0; i < entryNum; i++) {
  uniq++;
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
    photos: faker.random.words(), //img links //======= TO DO ======
    helpful: faker.random.number(4) // number of "helpful" votes
  }

  data.push(fakeReview);
}

console.log(data);

