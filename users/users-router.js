const router = require('express').Router();

const users = require('./users-model');
const restricted = require('../auth/restricted-middleware');

router.get('/', restricted, (req, res) => {
    users.find()
    .then(users => {
        res.json(users);
    })
    .catch(err => res.send(err))
})

module.exports = router;