const express = require('express')
const prof = require('../Controller/ProfessorsController')
const router = express.Router();

router.post('/add', prof.addProfessor)

router.post('/edit', prof.editProfessor)

router.get('/get', prof.getProfessors)


module.exports = {
    routes : router
}