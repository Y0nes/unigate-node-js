const express = require('express')
const sub = require('../Controller/subjects')
const router = express.Router();

router.post('/add', sub.add)

router.post('/delete', sub.delete)

module.exports = {
    routes : router
}