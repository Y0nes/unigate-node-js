'use strict';
// getting initialized database
const {databaseAdmin} = require('../db')
const db = databaseAdmin.firestore();
// point var to the firebase collection
const doctor = db.collection('Doctor');

// when adding a new announce
const addAnnounce = async (req, res) => {
    const data = req.body; // gets user data
    let docName = data.docName;
    let docId = data.docId;
    let announcement = data.ann;
    // communicate with the database passing some props 
    const announce = await doctor.doc(docId).collection('announcements')
    .add({  
        ann : announcement,
        time : new Date()
    }).catch(e => {
        // catch any error and notify the user 
        res.json(e.code)
    })
    // set the same announcements with same id to public
    res.json(announce.id);
    const id = announce.id
    await db.collection('Announcements').doc(id).set({
        data : announcement,
        date : new Date(),
        drName : docName
    }).catch(e => {
        res.json(e.code)
    })
}


// on edit announcement 
const editAnnounce = async (req, res) => {
    const data = req.body;
    let anId = data.anId;
    let docId = data.docId;
    let announcement = data.ann;
    await doctor.doc(docId).collection('announcements')
    .doc(anId).set({
        ann : announcement
    })
    .catch(e =>{
        res.json(e.code)
    })
    res.json(true)
}


// on delete an announce
const deleteAnnounce = async (req, res) => {
    const data = req.body;
    let anId = data.anId;
    let docId = data.docId;
    await db.collection('Announcements').doc(anId).delete()
    await doctor.doc(docId).collection('announcements').doc(anId).delete()
    .catch((e) => {
        res.json(e.code)
    })
    res.json('done') 
}

// on getting all announcements
const getAnnounce = async (req, res) => {
    let ALLofIt = []; // create an array to store them
    const data = req.body;
    let docId = data.docId;
    await doctor.doc(docId).collection('announcements') 
    // order them by date
    .orderBy('time', 'desc').get() // then get them desc
    .then(snapshot => {
        snapshot.docs.forEach(doc => { // loop through
        ALLofIt.push(doc)  // push the data into array
        })
    })
    .catch((e) => {
        res.json(e.code);
    });
    res.json(ALLofIt) // response with the array
}

module.exports = {
    add : addAnnounce,
    delete : deleteAnnounce,
    modify : editAnnounce,
    get : getAnnounce
}