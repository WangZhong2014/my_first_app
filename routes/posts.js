var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('posts', { title: 'posts', postList: ['文章1'，'文章2', '文章3'] });
});

module.exports = router;
