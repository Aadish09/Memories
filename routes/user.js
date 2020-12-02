const express = require('express');
const router = express.Router();
const User = require('../models/user');
const isLogged = require( './middleware')
router.get('/:id/posts',isLogged, (req, res) => {
    const id = req.params.id;
    User.findById(id).populate({
        path : 'Posts',
        populate : {
      path : 'author'
    }
    }).then((user) => {
        res.send(user.Posts)
      })
})
router.get('/:id/bookmarks',isLogged, (req, res) => {
    const id = req.params.id;
    User.findById(id).populate({
        path : 'bookmarks',
        populate : {
      path : 'author'
        }
    }).then((user) => {
        res.send(user.bookmarks)
    })
})
router.get('/:id/delete/bookmark/:postid',isLogged, (req, res) => {

  const id = req.params.id;
  const postid = req.params.postid;

  User.findById(id).then(async (user) => {
      user.bookmarks = await user.bookmarks.filter((bookmark)=>{
        return bookmark !=postid;
      })

      user.save();
      res.send({msg:"deleted bookmark"})
  }).catch((err)=>{
    console.log(err);
  })
})
module.exports = router