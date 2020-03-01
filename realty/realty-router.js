const router = require('express').Router();
const realty = require('./realty-model');

const restricted = require('../auth/restricted-middleware');

//get all photos
router.get('/', (req, res) => {
    realty.get()
    .then(image => {
        res.status(200).json(image);
    })
    .catch(err => {
        res.status(500).json({message: 'An Error occured'})
    })
})