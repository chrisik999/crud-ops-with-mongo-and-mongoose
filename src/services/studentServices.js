exports.fetchStudents = (req, res) => {
    return res.json({message:"successful Students"});
}

exports.fetchAStudent = (req, res) => {
    return res.json({message:"Student successful"});
}

exports.addAStudent = (req, res) => {
    return res.json({message:"successful added"});
}

exports.updateAStudent = (req, res) => {
    return res.json({message:"successful updated"});
}

exports.deleteAStudent = (req, res) => {
    return res.json({message:"successful deleted"});
}