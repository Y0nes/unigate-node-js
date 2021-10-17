'use strict';
// get database init 
const {databaseAdmin} = require('../db')
const db = databaseAdmin.firestore();
const doctor = db.collection('Doctor');

// on loadUser request 
const loadUser = async (req, res) => {
    const data = req.body;
    let docId = data.docId;
    // connect to database and get data
    await doctor.doc(docId).get()
            .then(user => { 
                res.json(user)
            })
            .catch((error) => {
                // catch error and send the error code
                res.json(error.code);
            });
}

module.exports = {
    loadUser : loadUser
}