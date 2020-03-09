const router = require('express').Router();

const contact = require('./contact-model');

router.get('/', (req, res) => {
    contact.find()
    .then(contact => {
        res.json(contact);
    })
    .catch(err => res.send(err))
})

module.exports = router;