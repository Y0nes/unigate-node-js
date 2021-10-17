const express = require('express')

const announce = require('../Controller/announce')

const router = express.Router();


router.post('/add', announce.add) // working 

router.post('/modify', announce.modify) // working 

router.post('/delete', announce.delete) // working

router.post('/get', announce.get) // working




module.exports = {
    routes : router
}