var express = require('express');
var router = express.Router();

var cntrlHotels = require('../controllers/hotels.controllers.js');

router
    .route('/hotels')
    .get(cntrlHotels.hotelsGetAll);

router
    .route('/hotels/:hotelId')
    .get(cntrlHotels.hotelsGetOne);

router
    .route('/hotels/new')
    .post(cntrlHotels.hotelsAddOne);

module.exports = router;