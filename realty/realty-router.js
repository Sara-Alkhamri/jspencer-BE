const router = require('express').Router();
const realty = require('./realty-model');

const restricted = require('../auth/restricted-middleware');

//get all photos
router.get('/', restricted,  (req, res) => {
    realty.find()
    .then(realty => {
        res.status(200).json(realty);
    })
    .catch(err => {
        res.status(500).json({message: 'An Error occured'})
    })
})