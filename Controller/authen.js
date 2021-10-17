const {database} = require('../db');
const authen = database.auth();


// on login request 
const login = (req,res) => {
  const {email , password} = req.body;
  // sent data to firebase to authenticate
    authen.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      if(userCredential.user.uid){
        // after checking send back the user token
        res.json(userCredential.user);
      }
      else{
        res.json(false)
      }
      // ...
    })
    .catch((error) => {
      res.json(error.code);
    });

}


// on forgot password
const forgot = (req, res) => {
  // gets the email from the body
  const {email} = req.body;
  //  connect to database and request 
  authen().sendPasswordResetEmail(email).then((data)=>{
    res.json(data)
    console.log(data)
  }).catch(e =>{
    res.json(null)
  })

}

// on register request
const register =(req, res)=>{
  const {email, password} = req.body;
  // connect to database giving email & Pass
  authen().createUserWithEmailAndPassword(email,password)
  .catch(e =>function(){
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      res.json('The password is too weak.');
    } else {
      res.json(errorMessage);
    }
    res.json(error);
  })
}

  
module.exports = {
    login : login,
    forgot: forgot,
    register : register

  }