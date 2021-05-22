const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({

})

const Course = mongoose.model('course', courseSchema);

module.exports = Course;