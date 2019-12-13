var express=require('express');
var router=express.Router();
var ctrlUser=require('../controllers/userController');
var ctrlPost=require('../controllers/postController');
var jwtVerify=require('../models/jwtVerification');


router.route('/user')
.post(ctrlUser.createUser)
.get(jwtVerify.jwtVarification,ctrlUser.getUsers);

// router.route('/isEmailExist/:emailId')
// .get(ctrlUser.isEmailIdExist);

router.route('/login')
.post(ctrlUser.login);

router.route('/user/:userId')
.get(jwtVerify.jwtVarification,ctrlUser.getUserById);

router.route('/postwithoutmedia')
.post(jwtVerify.jwtVarification,ctrlPost.createPost);
router.route('/postwithmedia')
.post(jwtVerify.jwtVarification,ctrlPost.createPostWithMedia);
router.route('/getPostsByUserId/:userId')
.get(jwtVerify.jwtVarification,ctrlPost.getPostsByUserId);

router.route('/getUserNames')
.get(jwtVerify.jwtVarification,ctrlUser.getUserNames);
router.route('/getSearchList')
.post(jwtVerify.jwtVarification,ctrlUser.getSearchList);
router.route('/followBtnClicked')
.post(jwtVerify.jwtVarification,ctrlUser.followBtnClick);
router.route('/getPostsByFollowingIds/:userId')
.get(ctrlPost.getPostByFollowingIds);

router.route('/likeUnlike')
.post(ctrlPost.likeUnlike);

module.exports=router;