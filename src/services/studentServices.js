const Student = require('../models/student');
exports.fetchStudents = (req, res) => {
    Student.find({},(err, students) => {
        if(err) {
            return res.satus(500).json({message: err})
        } else {
            return res.status(200).json({message: students})
        }
    })
}

exports.fetchAStudent = (req, res) => {
    Student.findById(req.params.id, (err, student) => {
        if(err) {
            return res.status(500).json({message: err})
        } else if(!student) {
            return res.status(404).json({message: "Student not found"})
        } else {
            return res.status(200).json({message: student});
        }
    })
    
}

exports.addAStudent = (req, res) => {
    Student.create({
        firstName: req.body.firstName,
        lastName:  req.body.lastName,
        regNo:  req.body.regNo,
        department:  req.body.department,
        level:  req.body.level
    }, (err, student) => {
        if(err) {
            return res.status(500).json({message: err})
        } else {
            return res.status(201).json({message: "Student successfully created", student: student});
        }
    })
}

exports.updateAStudent = (req, res) => {
    Student.findByIdAndUpdate(req.params.id, {
        firstName: req.body.firstName ,
        lastName: req.body.lastName,
        regNo: req.body.regNo,
        department: req.body.department,
        Level: req.body.Level
    }, (err, student) => {
        if(err) {
            return res.status(500).json({message: err});
        } else if(!student) {
            return res.status(404).json({message: "Student not found"});
        } else {
            student.save((err, student) => {
                if(err) {
                    return res.status(500).json({message: err})
                } else {
                    return res.status(202).json({message: "Successfully updated", student: student})
                }
            })
        }
    })
}

exports.deleteAStudent = (req, res) => {
    Student.findByIdAndDelete(req.params.id, (err, student) => {
        if(err) {
            return res.status(500).json({message: err});
        }else if(!student){
            return res.status(404).json({message: "Student not found"})
        } else {
            return res.status(200).json({message: "Student has been successfully deleted" })
        }
    })
}