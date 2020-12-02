const express = require('express');
const router = express.Router();
const Post = require('../models/posts');
const User = require('../models/user');
const isLogged = require('./middleware.js');
router.get('/', isLogged, async (req, res) => {
    const docs = await Post.find({}).populate('author')
    if (docs.length === 0) {
        res.send({
            err: "No posts found"
        })
    } else {
        res.send({
            posts: docs,
            err: null
        });
    }
});

router.get('/:id', isLogged, (req, res) => {
    const id = req.params.id;
    Post.findById({
        _id: id
    }, (err, doc) => {
        if (err) {
            res.send({
                error: err
            })
        } else {
            if (!doc) {
                res.send({
                    err: "No posts found"
                })
            } else {
                res.send(doc);
            }
        }
    });
});

router.patch('/:id', isLogged, (req, res) => {
    const id = req.params.id;
    Post.findOneAndUpdate({
        _id: id,
    }, {
        ...req.body
    }, (err, doc) => {
        if (err) {
            res.send({
                error: err
            })
        } else {
            res.send({
                success: "Post updated successfully",
                post: {
                    ...req.body
                }
            });
        }
    });
});

router.delete('/', isLogged, (req, res) => {
    const id = req.body._id;
    Post.deleteOne({
        _id: id
    }, (err, success) => {
        if (err) res.send({
            error: err
        })
        else {
            User.findOne({
                _id: req.body.author._id
            }, (err, doc) => {
                doc.Posts = doc.Posts.filter((post) => {
                    post != id
                })
                doc.bookmarks = doc.bookmarks.filter((bookmark) => {
                    bookmark != id;
                })
                doc.save();
                res.send({
                    success: "Deleted sucessfully"
                })
            })
        }
    });
});

router.post('/new', isLogged, async (req, res) => {
    var post = req.body;
    post = {
        ...post,
        createdOn: Date.now()
    };
    if (post.title === "" || post.createdOn === "" || post.image === "" || post.author === undefined || post.author === "") {
        console.log("Incomple post");
        res.send({
            error: "Incomplete post"
        });
    } else {
        
        var doc = await new Post(post);
        const user = await User.findById(post.author);
        user.Posts = user.Posts.concat(doc._id)
        await user.save();
        doc.author = user;
        await doc.save();
        res.send({
                success: "Post successfully created ",
                post,
                err:null
        });
    }
});
router.post('/like', isLogged, (req, res) => {
    const {
        post,
        user
    } = req.body;
    Post.findOne({
        _id: post._id
    }, (err, doc) => {
        if(doc.Likes.includes(user._id)===false){
            doc.Likes.push(user._id);
            doc.save();
            res.send({
                msg: "Liked"
            });
        }
        else{
            res.send({msg:"already liked"})
        }
        } 
    )
})
router.post('/unlike', isLogged, (req, res) => {
    const {
        post,
        user
    } = req.body;
    Post.findOne({
        _id: post._id
    },async  (err, doc) => {
        if(doc.Likes.includes(user._id)===true){
            doc.Likes=await doc.Likes.filter((userId)=>{
                return userId !=user._id;
            })
            doc.save();
            res.send({
                msg: "unliked"
            });
        }
        else{
            res.send({msg:"already unliked"})
        }
        } 
    )
})
router.post('/unbookmark', isLogged, (req, res) => {
    const {
        postId,
        userId
    } = req.body;
    User.findOne({_id:userId},async (err,doc)=>{
        if(err)res.send({error:err});
        if(doc.bookmarks.includes(postId)===true){
        doc.bookmarks= await doc.bookmarks.filter((bookmark)=>{
            return bookmark !=postId;
        })
        doc.save();
        res.send({msg:"UnBookmarked"})}
        else{
            res.send({msg:"Already unbookmarked"})
        }
    })
})
router.post('/bookmark', isLogged, (req, res) => {
    const {
        postId,
        userId
    } = req.body;
    User.findOne({_id:userId},(err,doc)=>{
        if(err)res.send({error:err});
        if(doc.bookmarks.includes(postId)===false){
        doc.bookmarks.push(postId);
        doc.save();
        res.send({msg:"Bookmarked"})}
        else{
            res.send({msg:"Already bookmarked"})
        }
    })
})
module.exports = router