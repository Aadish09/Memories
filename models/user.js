var mongoose =require('mongoose');

var userSchema = mongoose.Schema({
        email        : String,
        password     : String,
        name         : String,
        googleId     : String,
        token        : String,
        imageUrl     : String,
        Posts         :[{type:mongoose.Schema.Types.ObjectId,ref:'Post'}],
        bookmarks   :[{type:mongoose.Schema.Types.ObjectId,ref:'Post'}]


});





module.exports = mongoose.model('User', userSchema);