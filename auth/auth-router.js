const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets')
const Users = require('../users/users-model');

//register a user
//Endpoint: auth/register
router.post('/register', (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;
  
    Users.add(user)
      .then(saved => {
        const token = generateToken(saved);
        console.log('token', saved);
        res.status(201).json({ message: `Welcome ${saved.username}!`, token });
      })
      .catch(error => {
        console.log('add user');
        res.status(500).json(error);
      });
  });

//user login
//Endpoint auth/login
router.post('/login', (req, res) => {
    let { username, password } = req.body;
    Users.findBy({ username })
      .first()
      .then(user => {
        //check that passwords match
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
        //server returns the token to the client
          res.status(200).json({
            message: `Welcome ${user.username}!, I have a token`,
            token, //attach token as part of the response
          });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
    })
      .catch(error => {
        res.status(500).json(error);
    });
});  

  function generateToken(user) {
    const payload = {
      subject: user.id, //subject in the token is what the token is about
      username: user.username,
    };
  
    const options = {
      expiresIn: "4d"
    };
  //extract the secret away so it can be required and used where needed
    return jwt.sign(payload, secrets.jwtSecret, options); //this method is synchronous
}
module.exports = router;  
