const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');
const secret = "verySecureSECRET";
const expiry = 3600;

exports.createAUser = (req, res) => {
    //fetch the user details from request body
    const user = req.body.user;
    //check if user exists
    User.findOne({username: user.username}, (err, existingUser) => {
        if(err){
            return res.status(500).json({message: err});
        }
        if(existingUser) {
            return res.status(400).json({message: `User with usernsme ${user.username}`});
        }
        //create user
        User.create({
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
        }, (err, newUser) => {
            if(err) {
                return res.status(500).json({message: err});
            }
            // hash password
            bcrypt.genSalt(10, (err, salt) => {
                if(err) {
                    return res.status(500).json({message: err});
                }
                bcrypt.hash(user.password, salt, (err, hashedPassword) => {
                    if(err) {
                        return res.status(500).json({message: err});
                    }
                    //save password
                    newUser.password = hashedPassword;
                    newUser.save((err, savedUser) => {
                        if(err) {
                            return res.status(500).json({message: err});
                        }
                        //create jwt for user
                        jwt.sign({
                            id: newUser.id,
                            firstName: newUser.firstName,
                            lastName: newUser.lastName,
                        }, secret,{expiresIn: expiry}, (err,token) => {
                            if(err) {
                                return res.status(500).json({message: err});
                            }
                            //send token to user
                            return res.status(200).json({message: "User registration successful", token});
                        })
                    })

                })
            })
        })
    })
}

exports.getAllUsers = (req, res) => {
    User.find({}, (err, users) =>{
        if(err) {
            return res.status(500).JSON({message: err});
        }else {
            return res.status(200).json({message: "Successful", users: users });
        }
    })
}

exports.getAUser = (req, res) => {

}

exports.updateAUser = (req, res) => {

}

exports.deleteAUser = (req, res) => {

}