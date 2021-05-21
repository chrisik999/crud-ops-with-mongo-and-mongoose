const mongoose = require ('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    regNo: Number,
    Department: String,
    Level: Number
})

const Student = mongoose.model('student',studentSchema);

module.exports = Student;