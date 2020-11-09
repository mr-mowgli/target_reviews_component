# Tarjay Reviews Component

This service provides the reviews component of an item page for Tarjay.

To start this service:

Install dependancies - "npm install"

Start the server - "npm start"

Seed the database - "npm run db:seed"

To watch the client files - "npm run build"

Reviews should now be rendered on port 3001.

# Associated Services

Product Options - https://github.com/mr-mowgli/productOptions

Image Carousel - https://github.com/mr-mowgli/image_carousel

Recommended Products - https://github.com/mr-mowgli/recommendedProducts

# API Endpoints

GET - '/api/reviews' - get all reviews as JSON

GET - '/:id' - get one review by ID, served to the webpage

GET - '/api/reviews/:id' - get one review by ID, as JSON

POST - '/api/reviews' - post a review (full JSON body required)

PUT - '/api/reviews/:id' - update one review, by ID (JSON body featuring just the changes required)

DELETE - '/api/reviews/:id' - delete one review, by ID
