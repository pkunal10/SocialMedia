var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true
    },
    caption: {
        type: String
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    media: {
        type: String,
    },
    mediaType: {
        type: String
    },
    likes:{
        type:[String]
    }
})

mongoose.model('userPost', postSchema);