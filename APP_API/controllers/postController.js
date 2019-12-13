var express = require('express');
var mongoose = require('mongoose');
var post = mongoose.model('userPost');
const user = mongoose.model('users');
var multer = require('multer');
var store = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './userPosts');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "." + file.originalname);
    }
})
var upload = multer({ storage: store }).single('media');
module.exports.createPost = (req, res) => {
    post.create(
        {
            userId: req.body.userId,
            caption: req.body.caption,
        }
        , (err, postData) => {
            if (err) {
                return res.json({
                    'status': 'error',
                    'msg': err
                });
            }
            else {
                return res.json({
                    'status': 'success',
                    'data': postData
                })

            }
        })
}
module.exports.createPostWithMedia = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.json({
                'status': 'error',
                'msg': err
            })
        }
        else {
            var mediaType = "";
            var extArr = req.file.originalname.split('.');
            var ext = extArr[extArr.length - 1];
            if (ext.toUpperCase() == "JPG" || ext.toUpperCase() == "PNG" || ext.toUpperCase() == "GIF" || ext.toUpperCase() == "JPEG") {
                mediaType = "Image";
            }
            else {
                mediaType = "Video";
            }
            post.create(
                {
                    userId: req.body.userId,
                    caption: req.body.caption,
                    media: req.file.filename,
                    mediaType: mediaType
                }
                , (err, postData) => {
                    if (err) {
                        return res.json({
                            'status': 'error',
                            'msg': err
                        });
                    }
                    else {
                        return res.json({
                            'status': 'success',
                            'data': postData
                        })

                    }
                })
        }
    })
}

module.exports.getPostsByUserId = (req, res) => {
    post.find({ userId: req.params.userId }).sort({ datePosted: -1 })
        .exec((err, postsData) => {
            if (err) {
                return res.json({
                    'status': 'error',
                    'msg': err
                })
            }
            else if (!postsData) {
                return res.json({
                    'status': 'No Posts',
                    'msg': 'User does not have any posts'
                })
            }
            else {
                return res.json({
                    'status': 'success',
                    'data': postsData
                })
            }
        })
}

module.exports.getPostByFollowingIds = (req, res) => {
    var following;
    user.findById(req.params.userId)
        .exec((err, userdData) => {
            if (!err) {
                following = userdData.following;
                // console.log(following);
                post.find({ userId: { $in: following } })
                    .exec((err, postData) => {
                        if (!err) {
                            return res.json({
                                'status': 'success',
                                'data': postData
                            })
                        }
                    })
            }
        })
}

module.exports.likeUnlike = (req, res) => {
    var isExist = false;
    post.findById(req.body.postId).exec((err, postData) => {
        if (err) {
            return res.json({
                'status': 'error',
                'msg': err
            })
        }
        else if (!postData) {
            return res.json({
                'status': 'No Posts',
                'msg': 'Post not found'
            })
        }
        else {
            postData.likes.forEach(UserId => {
                if (UserId == req.body.userId) {
                    isExist = true;
                }
            });

            if (isExist) {
                post.findByIdAndUpdate(req.body.postId,
                    { $pull: { likes: req.body.userId } },
                    { safe: true, upsert: true }, (err, data) => {
                        console.log(data);
                        if (err) {
                            return res.json({
                                'status': 'error',
                                'msg': err.message
                            })
                        }
                        else {
                            return res.json({
                                'status': 'success',
                                'data': data
                            })
                        }
                    }
                )
            }
            else {
                post.findByIdAndUpdate(req.body.postId,
                    { $push: { likes: req.body.userId } },
                    { safe: true, upsert: true }, (err, data) => {
                        console.log(data);
                        if (err) {
                            return res.json({
                                'status': 'error',
                                'msg': err.message
                            })
                        }
                        else {
                            return res.json({
                                'status': 'success',
                                'data': data
                            })
                        }
                    }
                )
            }
        }
    })
}