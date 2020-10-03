const axios = require('axios');

var reviewSchema = {
  _id: expect.any(Number),
  author: expect.any(String),
  stars: expect.any(Number),
  body: expect.any(String),
  createdAt: expect.any(String),
  wouldRecommend: expect.any(Boolean),
  title: expect.any(String),
  comfort: expect.any(Number),
  style: expect.any(Number),
  value: expect.any(Number),
  sizing: expect.any(String),
  photos: expect.any(Array),
  helpful: expect.any(Number)
}


test('tests Jest - true equals true', () => {
  expect(true).toBe(true);
});

test('Request returns an array of 2000 objects', () => {
  axios.get('http://localhost:3001/api/reviews')
    .then( response => {
      expect(response.length).toEqual(2000)
    })
    .catch(err => {
      throw(err);
    })
  })

  test('Objects in response match schema', () => {
    axios.get('http://localhost:3001/api/reviews')
      .then( response => {
        response.forEach( element => {
          expect(element).toMatchObject(reviewSchema);
        })
      })
      .catch(err => {
        throw(err);
      })
    })