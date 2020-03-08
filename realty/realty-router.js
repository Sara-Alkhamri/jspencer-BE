const router = require('express').Router();
const Realty = require('./realty-model');

const restricted = require('../auth/restricted-middleware');

//get all photos
router.get('/', (req, res) => {
    Realty.get()
    .then(photo => {
        res.status(200).json(photo);
    })
    .catch(err => {
        res.status(500).json({message: 'An Error occured'})
    })
})

//add photo
//realty/add
router.post('/add', restricted, (req, res) => {
    let myPost = req.body;
    console.log('this is post', myPost)
    Realty.add(myPost)
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

//update a post
// realty/update/id
router.put('/update/:id', restricted, (req, res) => {
    const id = req.params.id;
    const action = req.body;

    Realty.update(id, action)
      .then(updated => {
        res.status(200).json({message: 'Post updated'});
      })
      .catch(error => {
        res.status(500).json({
          error: 'The information could not be modified'
        });
    });
}); 

//delete
//realty/delete:id
router.delete('/delete/:id', restricted, (req, res) => {
  const { id } = req.params;
  Realty.remove(id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({message: 'Post deleted'});
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