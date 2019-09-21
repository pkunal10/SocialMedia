var express = require('express');
var mongoose = require('mongoose');
var post = mongoose.model('userPost');
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
                    media:  req.file.filename,
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