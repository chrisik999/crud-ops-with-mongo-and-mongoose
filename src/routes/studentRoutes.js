const express = require ('express');
const studentServices = require('../services/studentServices');

const router = express.Router();

router.get('/students', studentServices.fetchStudents)

router.get('/students/:id', studentServices.fetchAStudent)

router.post('/students', studentServices. addAStudent)

router.put('/students/:id', studentServices.updateAStudent)

router.delete('/students/:id', studentServices.deleteAStudent)

module.exports = router;