'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyPasrser = require('body-parser');
const qrcode = require('./Controller/qrcode');
const prof = require('./routes/Professors_route');
const announce = require('./routes/announce_route');
const loadUser = require('./Controller/loadData');
const subjects = require('./routes/subjects_route');
const user = require('./routes/user_route');
const authen = require('./routes/authen_routes');

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyPasrser.json());

app.get('/', (req, res) => {
  res.send('its working fine for now!!');
});

// proffesors
app.use('/prof', prof.routes);

// announcements
app.use('/announce', announce.routes);

// ===========================

// AUTH engin for register, login and forgotPassword
app.use('/auth', authen.routes);

// post request to load the user from the database
app.post('/loaduser', loadUser.loadUser);

// post request for user qrcode
app.post('/qrcode', qrcode.handleUuid);

// ===============================================

// use a middleware for user subjects routes
app.use('/sub', subjects.routes);

// ================================
// use a middleware for user modifying routes
app.use('/modify', user.routes);

const port = process.env.port || '3000';
app.listen(port, () => console.log(`app is running on port ${port}`));
