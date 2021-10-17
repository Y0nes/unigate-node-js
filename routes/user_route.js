const express = require('express')
const usr = require('../Controller/user_modify')
const router = express.Router();


router.post('/name', usr.name)


module.exports = {
    routes : router
}