const router = require('express').Router();

const contact = require('./contact-model');

router.get('/', (req, res) => {
    contact.find()
    .then(contact => {
        res.json(contact);
    })
    .catch(err => res.send(err))
})


//contact/message
router.post('/message', (req, res) => {
    let myMessage = req.body;
    console.log('this is a message', myMessage)
    contact.add(myMessage)
      .then(info => {
        //   console.log(info)
        res.status(200).json({
          info
        });
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });


module.exports = router;  