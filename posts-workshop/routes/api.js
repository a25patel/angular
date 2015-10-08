var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/posts-workshop');
var Post = db.get('posts');

router.get('/posts', function(req,res,next){
  Post.find({}).then(function(posts){
    res.json(posts);
  })
})

router.get('/posts/new', function(req,res,next){
  res.json(posts);
})

router.post('/posts', function(req,res,next){
  console.log(req.body);
  Post.insert({
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    description: req.body.desc
  }).then(function(posts){
    res.json(posts);
  })
})

//
// router.get('/posts/:id', function(res,res,next){
//   Post.findOne({_id: req.params.id}).then(function(posts){
//     res.json(posts);
//   })
// })
//
// router.get('/posts/:id/edit', function(req,res,next){
//   Post.findOne({_id: req.params.id}).then(function(posts){
//     res.json('posts');
//   })
// })
//
// router.post('/posts', function(req,res,next){
//   Post.update({
//     _id:req.params.id,
//     title:
//     author:
//     image:
//     desc:
//   })
//   res.json(posts);
// })
//
// router.delete('/posts/:id/delete', function(req,res,next){
//   Post.remove({_id:req.params.id});
//   res.json(posts);
// })

module.exports = router;
