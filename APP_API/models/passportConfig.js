const passport=require('passport');
const passportlocal=require('passport-local').Strategy;
const mongoose=require('mongoose');
var user=mongoose.model('users');

passport.use(
    new Strategy({usernameField:'emailId'})
)