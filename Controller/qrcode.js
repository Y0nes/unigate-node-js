const client = require('../redis')

// getting generator from qrGenerator file 
const generator = require('./qrCodeGenerator')

const handleUuid = (req,res) => {
    // concate subj Id with the generated uuid and user uid
    let uid = req.body.subj + generator.uuidGenerator() + req.body.uid;
    // response with uid that contains 48 digits uniqly to the server
    res.json(uid)
    // set the uid to the redis side (key , value)
    client.set(req.body.subj, uid)
}


module.exports = {
    handleUuid: handleUuid
}