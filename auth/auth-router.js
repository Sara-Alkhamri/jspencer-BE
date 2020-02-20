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


  function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username,
    };
  
    const options = {
      expiresIn: "4d"
    };
  
    return jwt.sign(payload, secrets.jwtSecret, options);
}
module.exports = router;  