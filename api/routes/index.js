var express = require('express');
var router = express.Router();

var cntrlHotels = require('../controllers/hotels.controllers.js');
var cntrlReviews = require('../controllers/reviews.controllers.js');

router
    .route('/hotels')
    .get(cntrlHotels.hotelsGetAll)
	.post(cntrlHotels.hotelsAddOne);

router
    .route('/hotels/:hotelId')
    .get(cntrlHotels.hotelsGetOne)
    .put(cntrlHotels.hotelsUpdateOne);

//Review Routes
router
    .route('/hotels/:hotelId/reviews')
    .get(cntrlReviews.reviewsGetAll)
    .post(cntrlReviews.reviewsAddOne);

router
    .route('/hotels/:hotelId/reviews/:reviewId')
    .get(cntrlReviews.reviewsGetOne)
    .put(cntrlReviews.reviewsUpdateOne)


module.exports = router;