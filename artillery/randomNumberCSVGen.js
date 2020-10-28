const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

const writeData = fs.createWriteStream('random-products.csv');
writeData.write('productId\n', 'utf8');
let number;

for (let i = 1; i <= 10000; i++) {
  number = Math.floor(Math.random() * 10000000);
  writeData.write(`${number}\n`, 'utf8');
}

writeData.end();
