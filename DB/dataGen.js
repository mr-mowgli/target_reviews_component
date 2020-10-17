const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

// global objects for faker
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

// helper function that generates random dates
const randomDate = (start, end) => {
  var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

// primary function that generates a set number of primary records
const generatePrimaryRecords = () =>  {

  let currentId = 0;

  writer.pipe(fs.createWriteStream('seed-data.csv'));

  for(let i = 0; i < 2000000; i++) {
    for (let j = 0; j < Math.floor(Math.random() * 20); j++) {
      writer.write({
        author: faker.name.firstName(),
        stars: randomNumber(0, 6), // 0-5
        body: faker.lorem.paragraph(),
        createdAt: randomDate(new Date("2020-09-15T20:44:19.172Z"), new Date("2020-10-01T20:44:19.172Z")),
        wouldRecommend: faker.random.boolean(),
        title: faker.random.words(),
        comfort: randomNumber(0, 6), // 0-5
        style: randomNumber(0, 6), // 0-5
        value: randomNumber(0, 6), // 0-5
        sizing: randomNumber(1, 4), // [too small, too big, true to size]
        helpfulVotes: randomNumber(0, 6), // # of "helpful" votes
        productId: currentId
      });
    }

    currentId++;
  }

  writer.end();
  console.log('CSV generation complete');

}

generatePrimaryRecords();