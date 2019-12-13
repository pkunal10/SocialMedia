const mongoose = require('mongoose');
const user = mongoose.model('users');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const store = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './userImages/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.' + file.originalname);
    }
});

var upload = multer({ storage: store }).single('userImage');// inside single function single('userImage') userImage should same as what we have given in formdata on angular side.  
//var upload = multer({dest:'./userImages/'}).single('photo');  

module.exports.getUserById = function (req, res) {
    // user.findOne({emailId:req.params.userId})
    user.findById(req.params.userId)
        .exec((err, userData) => {
            if (!userData) {
                return res.status(404).json({
                    'status': 'error',
                    'msg': "No user found"
                });
            }
            else if (err) {
                return res.status(404).json({
                    'status': 'error',
                    'msg': err
                });
            }
            else {
                return res.json({
                    'status': 'success',
                    'data': userData
                })
            }
        })
}

// module.exports.isEmailIdExist = function (req, res) {
//     user.findOne({ emailId: req.params.emailId })//.limit(1)
//         .exec((err, userData) => {
//             if (!userData) {
//                 return res.status(404).json({
//                     'status': 'no',
//                     'msg': 'New Email id.'
//                 });
//             }
//             else if (err) {
//                 return res.status(404).json({
//                     'status': 'error',
//                     'msg': err
//                 });
//             }
//             else {
//                 return res.status(200).json({
//                     'status': "yes",
//                     'msg': 'Email id already exists.',
//                     'data': userData
//                 });
//             }
//         })
// }

module.exports.createUser = (req, res) => {

    upload(req, res, (err) => {
        if (err) {
            return res.status(404).json({
                'status': 'error',
                'msg': err
            });
        }
        else {
            user.findOne({ emailId: req.body.emailId })//.limit(1)
                .exec((err, userData) => {
                    if (!userData) {
                        var usrAddress = {
                            line1: req.body.line1,
                            city: req.body.city,
                            state: req.body.state,
                            country: req.body.country

                            // line1: "test",
                            // city: "test",
                            // state: "test",
                            // country: "test"

                        }
                        user.create({
                            fName: req.body.fName,
                            lName: req.body.lName,
                            emailId: req.body.emailId,
                            mobile: req.body.mobile,
                            gender: req.body.gender,
                            address: usrAddress,
                            password: req.body.password,
                            profilePic: req.file.filename
                        }, (err, userData) => {
                            if (err) {
                                return res.status(404).json({
                                    'status': 'error',
                                    'msg': err.message
                                });
                            }
                            else {
                                return res.status(201).json({
                                    'status': 'success',
                                    'msg': 'User created.',
                                    'data': userData
                                });
                            }
                        })
                    }
                    else {
                        return res.status(200).json({
                            'status': "error",
                            'msg': 'Email id already exists.',
                            'data': userData
                        });
                    }
                })
        }
    })
}

module.exports.login = (req, res, next) => {
    user.findOne({ emailId: req.body.emailId, password: req.body.password })
        .exec((err, userData) => {

            if (err) {
                return res.json({
                    'status': 'error',
                    'msg': err.message
                });
            }
            else if (!userData) {
                return res.json({
                    'status': 'NoUser',
                    'msg': 'Invalid Userid or password.'
                })
            }
            else {
                var token = jwt.sign({ userId: userData._id }, "JZDM", {  //userId is payload
                    expiresIn: "15m"
                });
                return res.json({
                    'status': 'success',
                    //'data':userData
                    // 'token': user.generateJWT()
                    'token': token
                })
            }
        })
}

module.exports.getUsers = (req, res, next) => {
    // we will have req.emailId of loged in user here becaucuse its protected route and we have set req.emailId in jwtVarification function


}

module.exports.getUserNames = (req, res) => {
    user.find().select('fName lName')
        .exec((err, userdata) => {
            if (err) {
                return res.json({
                    'status': 'error',
                    'msg': err.message
                });
            }
            else {
                return res.json({
                    'status': 'success',
                    data: userdata
                })
            }
        })
}
module.exports.getSearchList = (req, res) => {
    console.log(req.body);
    user.find({ fName: req.body.fName, lName: req.body.lName })
        .exec((err, userData) => {
            if (err) {
                return res.json({
                    'status': 'error',
                    'msg': err.message
                })
            }
            else if (!userData) {
                return res.json({
                    'status': 'No User',
                    'msg': 'No result found'
                })
            }
            else {
                return res.json({
                    'status': 'success',
                    data: userData
                })
            }
        })
}

module.exports.followBtnClick = (req, res) => {
    user.findByIdAndUpdate(req.body.loggedInUserId,
        { $push: { following: req.body.clickedUserId } },
        { safe: true, upsert: true }, (err, data) => {
            if (err) {
                return res.json({
                    'status': 'error',
                    'msg': err.message
                })
            }
            else {
                user.findByIdAndUpdate(req.body.clickedUserId,
                    { $push: { followers: req.body.loggedInUserId } },
                    { safe: true, upsert: true }, (err, data) => {
                        if (err) {
                            return res.json({
                                'status': 'error',
                                'msg': err.message
                            })
                        }
                        else {
                            return res.json({
                                'status': 'success',
                                'msg': 'followed'
                            })
                        }
                    }
                )
            }
        }
    )
}