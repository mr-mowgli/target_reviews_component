# target_reviews_component

This service provides the reviews component of a Target item page.

To start this service:

Install dependancies via "npm install"

Start the server via "npm start"

In another terminal window, seed the database by typing "npm run db:seed"

Have webpack watch the files via "npm run build"

Reviews should now be rendered on port 3001.

# API Endpoints

GET - '/api/reviews' - get all reviews as JSON

GET - '/:id' - get one review by ID, served to the webpage

GET - '/api/reviews/:id' - get one review by ID, as JSON

POST - '/api/reviews' - post a review (full JSON body required)

PUT - '/api/reviews/:id' - update one review, by ID (JSON body reaturing just the changes required)

DELETE - '/api/reviews/:id' - delete one review, by ID