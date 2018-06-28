// 路由
const express = require('express');
const router = express.Router();

module.exports = router;

const indexCtrl = require('../controllers/index');
const categoryCtrl = require('../controllers/category');
const topicCtrl = require('../controllers/topic');
const usersCtrl = require('../controllers/users');
// 设置路由规则
router.get('/',indexCtrl.showIndex);
router
    .get('/signin',usersCtrl.showSignin)
    .post('/signin',usersCtrl.handleSignin)
    .get('/signup',usersCtrl.showSignup)
    .post('/signup',usersCtrl.handleSignup)
    .get('/signout',usersCtrl.handleSignout)