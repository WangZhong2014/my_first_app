var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');
// get users lists
router.get('/users', function (req,res,next) {
	// body...
	res.send('respond with a resourse');
});

// // get posts lists
// router.get('/posts', function (req,res,next) {
// 	// body...
// 	res.json({postsList: ['文章1','文章2','文章3']});
// });

// // post posts
// router.post('/posts/create', function (req,res,next) {
// 	// body...
// 	var title = req.body.title;
// 	var content = req.body.content;
// 	res.send({title, content}); // 收到数据后，又把数据返回给了请求方
// })

// get posts lists
router.get('/posts', function (req, res, next) {
	// body...
	PostModel.find({},{}, function(err, posts) {
		if (err) {
			res.json({success: false});
			return;
		} else {
			res.json({success: true, postsList: posts });
		}
	});
});


// post create post
router.post('/posts/create', function (req,res,next) {
	// body...
	var title = req.body.title;
	var content = req.body.content;

	var post = new PostModel();
	post.title = title;
	post.content = content;

	post.save(function (err) {
		// body...
		if (err) {
			res.json({success: false});
		} else {
			res.json({success: true});
		}
		});
});


// git one post
router.get('/posts/one', function(req,res,next){
	var id = req.query.id;

	PostModel.findOne({_id: id}, function (err,post) {
		// body...
		if(err) {
			res.json({success: false});
			return;
		} else {
			res.json({success:true, post})
		};
	});
});

// path edit post
router.post('/posts/edit', function (req,res, next) {
	// body...
	var id = req.body.id;
	var title = req.body.id;
	var content = req.body.content;

	PostModel.findOneAndUpdate({_id: id }, {title, content}, function (err) {
		// body...
		if(err) {
			res.json({success: false});
		} else{
			res.json({success: true});
		}
	});
});


module.exports = router;
