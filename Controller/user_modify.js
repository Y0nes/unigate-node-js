'use strict';

const {databaseAdmin} = require('../db')
const db = databaseAdmin.firestore();
// mutler is a package to recieve big files 
const multer  = require('multer')
// creating doctor collection
const doctor = db.collection('Doctor');

// Set Storage Engine 
const storage = multer.diskStorage({
    destination: './Public/',
    filename: function(req, file, cb){
        cb(null,file.fieldname + '=' + Date.now())
    }
})

// init upload 
const upload = multer({ storage: storage }).single('img');


// init function to modify user's name 
async function firebaseModify (data){
    return (
        await doctor.doc(data.docId).set({
            name : data.name
        },{merge : true})
        .catch(e => {
            return e;
        })
    )
}

// an Api takes a req and set it then return the data back
const modifyName = async (req, res) => {
    let resp = await firebaseModify(req.body)
    res.json(resp)
}


module.exports = {
    name : modifyName
}