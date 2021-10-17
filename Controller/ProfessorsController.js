'use strict';

// "use strict"; Defines that JavaScript 
// code should be executed in "strict mode".

const {databaseAdmin} = require('../db')
// 
const db = databaseAdmin.firestore();

// on Edit professor' request 
const editProfessor = async (req, res) => {
        const data = req.body;
        const doctorID = req.body.id;
        const doctor = db.collection('Doctor').doc(doctorID);
        // get to the collection and set a new data
        await doctor.set(data)
        res.json('Professor edited Successfully')
}

// on add a new professor' request 
const addProfessor = async (req, res) => {
    const data = req.body;
    const id = req.body.id;
    const doctor = db.collection('Doctor').doc(id);
    // get to the collection and update an old data
    await doctor.set(data);
    res.json('Professor Stored Successfully')
}

// on get all professors' request 
const getProfessors = async (req, res) => {
        const snapshot = await db.collection('Doctor').get();
        // get to the collection and get all the data
        snapshot.forEach((doc) => {
            res.json(doc._fieldsProto.name.stringValue);
        })
}

module.exports = {
    addProfessor : addProfessor,
    getProfessors : getProfessors,
    editProfessor : editProfessor
}