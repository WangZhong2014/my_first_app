import express from 'express';
import * as auth from './middlewares/auth';
import * as post from './controllers/post';
import * as user from './controllers/user';

const router = express.Router();

// get users lists
router.get('/users', user.more);

// get posts lists
router.get('/posts', post.more);

// get one post
router.get('/posts/:id', post.one);

// post create post
router.post('/posts', auth.adminRequired,post.create);

// patch edit post
router.patch('/posts/:id',auth.adminRequired,post.update);

// post signup user
router.post('/signup', user.signup);

// post signin user
router.post('/signin', user.signin);

// get acitve account
router.get('/activeAccount',user.activeAccount);
export default router;