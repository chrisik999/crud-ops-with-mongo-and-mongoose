const mongoose = require ('mongoose');
const mongoURI = "mongodb://localhost:27017/school";

module.exports = function connectDB () {
    mongoose.connect(mongoURI,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    },(err, db) => {
        if(err) {
            console.log(err);
        } else {
            console.log("database connected");
        }
    })
} 