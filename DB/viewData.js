const Reviews = require('./Reviews.js');

// CONSOLE LOG ALL DATA IN Reviews DB.
Reviews.find((err, values) => {
  console.log(values);
})



// Reviews.collection.deleteMany({}); //UNCOMMENT THIS LINE TO DELETE DATA