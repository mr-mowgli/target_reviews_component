const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

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

// primary function that generates primary records
const generatePrimaryRecords = (numberOfRecords, writer, encoding, callback) =>  {
  let counter = numberOfRecords;
  let productId = 1;
  let recordId = 1;
  let idNumberOfRecords = faker.random.number({'min': 2, 'max': 6});
  let idCurrentRecordCount = 1;
  let gratuitousCommas = 0;
  let islandsCommaCount = 0;

  const write = () => {
    let ok = true;

    do {
      counter -= 1;

      idCurrentRecordCount++;

      if (idCurrentRecordCount >= idNumberOfRecords) {
        productId++;
        idNumberOfRecords = faker.random.number({'min': 2, 'max': 6});
        idCurrentRecordCount = 1;
      }

      let author = faker.name.firstName();
      let stars = faker.random.number({'min': 1, 'max': 5}); // 0-5
      let body = faker.lorem.paragraph();
      let createdAt = randomDate(new Date("2020-09-15T20:44:19.172Z"), new Date("2020-10-01T20:44:19.172Z"));
      let wouldRecommend = faker.random.boolean();
      let title = faker.random.words();
      let comfort = faker.random.number({'min': 1, 'max': 5}); // 0-5
      let style = faker.random.number({'min': 1, 'max': 5}); // 0-5
      let productValue = faker.random.number({'min': 1, 'max': 5}); // 0-5
      let sizing = faker.random.number({'min': 1, 'max': 3}); // [too small, too big, true to size]
      let helpfulVotes = randomNumber(0, 6); // # of "helpful" votes

      if (title.includes('Islands,')) {
        islandsCommaCount++;
        console.log('Got one!  Islands, #', islandsCommaCount);
        title = 'Islands Associate Computer';
      }

      if (title[title.length - 1] === ',') {
        gratuitousCommas++;
        title = title.slice(0, -1);
      }

      let data = `${author},${stars},${body},${createdAt},${wouldRecommend},${title},${comfort},${style},${productValue},${sizing},${helpfulVotes},${productId}\n`;

      recordId++;

      if (counter === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (counter > 0 && ok);

    if (counter > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

const writeUsers = fs.createWriteStream('seed-data.csv');
writeUsers.write('author,stars,body,createdAt,wouldRecommend,title,comfort,style,value,sizing,helpfulVotes,productId\n', 'utf8');

generatePrimaryRecords(60000000, writeUsers, 'utf-8', () => {
  console.log('Seeding operation complete.')
  writeUsers.end();
});