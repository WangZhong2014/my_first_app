import express from 'express';
import * as auth from './middlewares/auth';
import * as page from './controllers/page';

const router = express.Router();

// get home page
router.get('/',page.homePage);

// get posts page
router.get('/posts', page.postsPage);

// get posts create page
router.get('/posts/create', auth.adminRequired, page.createPage);

// get posts edit page
router.get('/posts/edit', auth.adminRequired,page.editPage);

// get posts show page
router.get('/posts/show', page.showPage);

// get signup page
router.get('/signup',page.signupPage);

// get signin page
router.get('/signin', page.signinPage);

// get signout page
router.get('/signout', page.signout);

export default router;