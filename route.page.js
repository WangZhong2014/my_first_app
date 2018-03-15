var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');
var marked = require('marked');
// get home page.
router.get('/', function (req,res,next) {
	// body...
	res.render('index', {title: 'express'});
});

// get posts page
router.get('/posts', function (req,res,next) {
	// body...
	res.render('posts', {title: 'posts'});
});

// get posts create page.
router.get('/posts/create', function(req,res,next) {
	res.render('create');
});

// get posts show pages.
router.get('/posts/show', function (req,res,next) {
	// body...
	var id = req.query.id;

	PostModel.findOne({_id: id}, function (err, post) {
		// body...
		post.content = marked(
			post.content);
		res.render('show', {post});
	});
});

// get posts edit page.
router.get('/posts/edit', function (res,req,next) {
	// body...
	var id = req.query.id;

	res.render('edit', { id });
})

module.exports = router;
