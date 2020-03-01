const router = require('express').Router();
const Realty = require('./realty-model');

const restricted = require('../auth/restricted-middleware');

//get all photos
router.get('/', restricted,  (req, res) => {
    Realty.find()
    .then(photo => {
        res.status(200).json(photo);
    })
    .catch(err => {
        res.status(500).json({message: 'An Error occured'})
    })
})

//add photo
//realty/create
router.post('/create', restricted, (req, res) => {
    let myPost = req.body;
    console.log('this is post', myPost)
    Realty.add(myPost)
      .then(info => {
        //   console.log(info)
        res.status(201).json({
          info
        });
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;