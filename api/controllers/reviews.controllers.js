var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');

module.exports.reviewsGetAll = function(req, res){
    var hotelId = req.params.hotelId;
    console.log('Get the hotelId', hotelId);
    
    Hotel.findById(hotelId).select('reviews').exec(function(err, doc){
        console.log('Returned Doc', doc);
        res.status(200).json(doc.reviews);    
    });
};

module.exports.reviewsGetOne = function(req, res){
    var hotelId = req.params.hotelId;
    var reviewId = req.params.reviewId;
    console.log('Get reviewId ' + reviewId + ' for hotelId ' + hotelId);
    
    Hotel.findById(hotelId).select('reviews').exec(function(err, hotel){
        console.log('Returned hotel', hotel);
        var review = hotel.reviews.id(reviewId);
        res.status(200).json(review);    
    });
};

var _addReview = function(req, res, hotel){
    
    hotel.reviews.push({
        name : req.body.name,
        rating : parseInt(req.body.rating, 10),
        review : req.body.review
    });
    
    hotel.save(function(err, hotelUpdated){
        if(err){
            res.status(500).json(err);
        } else {
            res.status(201).json(hotelUpdated.reviews[hotelUpdated.reviews.length - 1]);
        }        
    });
}

module.exports.reviewsAddOne = function(req, res){
    var hotelId = req.params.hotelId;
    console.log('Get the hotelId', hotelId);
    
    Hotel.findById(hotelId).select('reviews').exec(function(err, doc){
        var response = {
            status : 200,
            message : []
        };
        if(err){
            console.log("Error finding hotel");
            response.status = 500;
            response.message = err;
        } else if(!doc){
            console.log("Hotel ID not found in database", id);
            response.status = 404;
            response.message = {
                "message" : "Hotel ID not found " + id
            };
        } 
        if(doc){
            _addReview(req, res, doc);    
        } else{
            console.log('Returned Doc', response);
            res.status(response.status).json(response.message);
        }
            
    });
};

module.exports.reviewsUpdateOne = function(req, res){
    
};