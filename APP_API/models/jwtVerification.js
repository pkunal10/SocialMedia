var jwt = require('jsonwebtoken');

module.exports.jwtVarification = (req, res, next) => {
    var token;
    if ('authorization' in req.headers) {
        token = req.headers['authorization'].split(' ')[1];
    }
    if (!token) {
        res.json({
            'status': 'noToken',
            'msg': 'No token provided'
        });
    }
    else {
        jwt.verify(token, "JZDM", (err, decoded) => { //JZDM is seceret key same as in user.js model file in jwt.sign function
            if (err) {
                // res.json({
                //     'status': 'error',
                //     'msg': 'Token authentication failed'
                // })
                return res.status(500).send({ auth: false, message: 'Token authentication failed.' });
            }
            else {
                req._id = decoded.userId;
                next();
            }
        });
    }
}