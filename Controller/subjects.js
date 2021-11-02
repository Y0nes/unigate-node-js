'use strict';

const firebase = require('firebase-admin');
const { databaseAdmin } = require('../db');
const db = databaseAdmin.firestore();
// create doctor collection
const doctor = db.collection('Doctor');

// asking firebase to  add a new subject
async function firebaseAdd(data) {
  let addObj = { subjects: {} }; // creating field obj js obj
  addObj.subjects[data.subName] = data.subId;
  // to access a map field in firebase
  return (
    // return data to database
    await doctor
      .doc(data.docId)
      .set(addObj, { merge: true })
      .catch((e) => {
        return e;
      })
  );
}
// on deleting a subject
async function firebaseDelete(data) {
  return (
    // getting a subject name then delete the field from firestore
    await doctor
      .doc(data.docId)
      .update({
        ['subjects.' + data.subName]: firebase.firestore.FieldValue.delete(),
      })

      .catch((e) => {
        return e;
      })
  );
}

// request & response funtion for adding subject
const addSubject = async (req, res) => {
  let resp = await firebaseAdd(req.body);
  res.json(resp);
};

// request & response funtion for deleting subject
const deleteSubject = async (req, res) => {
  let resp = await firebaseDelete(req.body);
  res.json(resp);
};

module.exports = {
  add: addSubject,
  delete: deleteSubject,
};
