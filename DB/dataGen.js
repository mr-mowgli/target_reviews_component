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

// primary function that generates primary records
const generatePrimaryRecords = (numberOfRecords, writer, encoding, callback) =>  {
  let counter = numberOfRecords;
  let id = 1;
  let idNumberOfRecords = Math.floor(Math.random() * 20);
  let idCurrentRecordCount = 1;

  const write = () => {
    let ok = true;

    do {
      counter -= 1;

      idCurrentRecordCount++;

      if (idCurrentRecordCount >= idNumberOfRecords) {
        id++;
        idNumberOfRecords = Math.floor(Math.random() * 20);
        idCurrentRecordCount = 1;
      }

      let author = faker.name.firstName();
      let stars = randomNumber(0, 6); // 0-5
      let body = faker.lorem.paragraph();
      let createdAt = randomDate(new Date("2020-09-15T20:44:19.172Z"), new Date("2020-10-01T20:44:19.172Z"));
      let wouldRecommend = faker.random.boolean();
      let title = faker.random.words();
      let comfort = randomNumber(0, 6); // 0-5
      let style = randomNumber(0, 6); // 0-5
      let productValue = randomNumber(0, 6); // 0-5
      let sizing = randomNumber(1, 4); // [too small, too big, true to size]
      let helpfulVotes = randomNumber(0, 6); // # of "helpful" votes

      let data = `${author},${stars},${body},${createdAt},${wouldRecommend},${title},${comfort},${style},${productValue},${sizing},${helpfulVotes},${id}\n`;

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

generatePrimaryRecords(10000000, writeUsers, 'utf-8', () => {
  console.log('Seeding operation complete.')
  writeUsers.end();
});