var express = require('express');
var router = express.Router();

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

module.exports = router;

// get posts create page.
router.get('/posts/create', function(req,res,next) {
	res.render('create');
});
