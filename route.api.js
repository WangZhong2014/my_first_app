var express = require('express');
var router = express.Router();

// get users lists
router.get('/users', function (req,res,next) {
	// body...
	res.send('respond with a resourse');
});

// get posts lists
router.get('/posts', function (req,res,next) {
	// body...
	res.json({postsList: ['文章1','文章2','文章3']});
});

// post posts
router.post('/posts/create', function (req,res,next) {
	// body...
	var title = req.body.title;
	var content = req.body.content;
	res.send({title, content}); // 收到数据后，又把数据返回给了请求方
})

module.exports = router;
