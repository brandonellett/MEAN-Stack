var express = require('express');
var router = express.Router();

var cntrlHotels = require('../controllers/hotels.controllers.js');
var cntrlReviews = require('../controllers/reviews.controllers.js');

router
    .route('/hotels')
    .get(cntrlHotels.hotelsGetAll);

router
    .route('/hotels/:hotelId')
    .get(cntrlHotels.hotelsGetOne);

router
    .route('/hotels/new')
    .post(cntrlHotels.hotelsAddOne);

//Review Routes
router
    .route('/hotels/:hotelId/reviews')
    .get(cntrlReviews.reviewsGetAll);

router
    .route('/hotels/:hotelId/reviews/:reviewId')
    .get(cntrlReviews.reviewsGetOne);


module.exports = router;