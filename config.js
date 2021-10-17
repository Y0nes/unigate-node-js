'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    PROJEC_ID,
    STORAGE_BUCKET,
    MESSAGEING_SENDER_ID,
    APP_ID,
    MEASUTEMENT_ID,
    RPORT,
    RHOST,
    RAUTH,
    TYPE,
    PRIVATE_KEY_ID,
    PRIVATE_KEY,
    CLIENT_EMAIL,
    CLIENT_ID,
    AUTH_URI,
    TOKEN_URI,
    AUTH_PROVIDER_X509_CERT_URL,
    CLIENT_X509_CERT_URL
} = process.env;

assert(PORT, 'Port is required');
assert(HOST, 'Host is required');

module.exports = {
    port : PORT,
    host : HOST, 
    url : HOST_URL,
     firebaseConfig : {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJEC_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGEING_SENDER_ID,
        appId: APP_ID,
        measurementId: MEASUTEMENT_ID
     },
     redisConfig : {
         port : RPORT,
         host : RHOST,
         auth : RAUTH
     }

}