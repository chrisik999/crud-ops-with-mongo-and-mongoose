const mongoose = require ('mongoose');

const studentSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true,
        minLength: 3
    },
    lastName: {
        type: String,
        required:true,
        minLength: 3
    },
    regNo: {
        type: Number,
        required:true
    },
    department:{
        type: String,
        required:true,
        minLength: 3
    },
    level: {
        type: Number,
        required:true
    }
})

const Student = mongoose.model('student',studentSchema);

module.exports = Student;