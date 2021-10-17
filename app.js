'use strict';

const express = require('express')
const cors = require('cors');
const bodyPasrser = require('body-parser');
const config = require('./config');
const qrcode = require('./Controller/qrcode')
const prof = require('./routes/Professors_route')
const announce = require('./routes/announce_route')
const loadUser = require('./Controller/loadData')
const subjects = require('./routes/subjects_route')
const user = require('./routes/user_route');
const authen = require('./routes/authen_routes');



// middleware
const app = express();
app.use(cors());
app.use(bodyPasrser.json());

// proffesors
app.use('/prof', prof.routes);

// announcements
app.use('/announce', announce.routes)


// ===========================

// AUTH engin for register, login and forgotPassword
app.use('/auth', authen.routes)

// post request to load the user from the database
app.post('/loaduser', loadUser.loadUser)

// post request for user qrcode
app.post('/qrcode', qrcode.handleUuid)

// ===============================================

// use a middleware for user subjects routes
app.use('/sub', subjects.routes)

// ================================
// use a middleware for user modifying routes
app.use('/modify', user.routes)

app.listen(config.port, ()=> {
    console.log(`app is running on port ${config.port}`)
});



