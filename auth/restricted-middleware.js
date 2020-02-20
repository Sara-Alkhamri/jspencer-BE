const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets') //holds the jwt signature secrets

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    // console.log('MIDDLEWARE')
    if(token) {
      //check that token is valid
      jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        if(err) {
          //foul play
          console.log(err)
          res.status(401).json({ message: 'Invalid Credentials' });
        } else {
          //token is good
          // req.user = {username: decodedToken.username};
          req.decodedJwt = decodedToken;
          console.log("decoded token", req.decodedJwt);
          next();
        }
      })
    } else {
      res.status(400).json({ message: "no credentials provided" })
    }
  };  
