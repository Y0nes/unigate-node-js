const express = require('express')
const authen = require('../Controller/authen')
const router = express.Router();


router.post('/login', authen.login)

router.post('/forgot', authen.forgot) 

router.post('/register', authen.register) 



module.exports = {
    routes : router
}