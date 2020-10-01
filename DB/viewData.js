const Reviews = require('./Reviews.js');

// CONSOLE LOG ALL DATA IN Reviews DB.
Reviews.find((err, values) => {
  console.log(values);
})



// Reviews.collection.deleteMany({});
// console.log('DB DELETED');  //UNCOMMENT THESE 2 LINES TO DELETE DATA

