const router = require('express').Router();

const contact = require('./contact-model');
const restricted = require('../auth/restricted-middleware')

// get all submitted contact messages
router.get('/', (req, res) => {
    contact.find()
    .then(contact => {
        res.json(contact);
    })
    .catch(err => res.send(err))
})

//contact/message
router.post('/submit', (req, res) => {
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

//delete
//contact/delete:id
router.delete('/delete/:id', restricted, (req, res) => {
    const { id } = req.params;
    contact.remove(id)
      .then(count => {
        if (count > 0) {
          res.status(200).json({message: 'Message deleted'});
        } else {
          res
            .status(404)
            .json({ error: 'A post with provided ID does not exist' });
        }
      })
      .catch(error => {
        res.status(500).json({
          error: 'This post could not be removed'
        });
      });
  });  


module.exports = router;  