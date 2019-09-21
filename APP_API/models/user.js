const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

var addressSchema = new mongoose.Schema({
    line1: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

var userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    mobile: {
        type: String
    },
    gender: {
        type: String,
        required: true
    },
    address: addressSchema,
    profilePic: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    followers: [String],
    following: [String],
    accountCreated: {
        type: Date,
        default: Date.now
    }
});

userSchema.methods.generateJWT = function () {
    return jwt.sign({ emailId: this.emailId }, "JZDM", {  // emailId is payload
        expiresIn: "15m"
    });
}

mongoose.model('users', userSchema);