const express = require('express');
const router = express.Router();

const userServices = require('../services/userServices');

router.get('/users', userServices.getAllUsers);

router.post('/signup', userServices.createAUser);


router.post('/login', userServices.loginUser)

module.exports = router;