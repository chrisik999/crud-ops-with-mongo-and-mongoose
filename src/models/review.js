const mongoose =  require('mongoose');

const reviewSchema = new mongoose.Schema({

})

const Review = mongoose.model('review', reviewSchema);

module.exports = Review;