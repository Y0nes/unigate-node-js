const firebase = require('firebase');
const admin = require('firebase-admin');
const config = require('./config');
const serviceAccount = require('./unigate-a7e38-firebase-adminsdk-9g2km-3cf0dc8c29.json');

// init database firebase admin giving cred..
const databaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket : 'unigate-a7e38.appspot.com'
})

// init database app
const database = firebase.initializeApp(config.firebaseConfig);

module.exports = {
    database : database,
    databaseAdmin  : databaseAdmin,
    admin : admin
};