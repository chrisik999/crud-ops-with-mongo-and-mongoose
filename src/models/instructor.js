const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({

})

const Instructor = mongoose.model('instructor', instructorSchema);

module.exports = Instructor;