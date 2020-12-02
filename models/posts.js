var mongoose =require('mongoose');
var User = require('./user');
var postSchema = mongoose.Schema({
    title:{type:String,required:true},
    createdOn:{type:String,required:true},
    author:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    body:{type:String,required:true},
    image:{type:Object,required:true},
    Likes:[]

},{autoIndex:true});
module.exports = mongoose.model('Post', postSchema);
