//gonna create models
//Student model

//import mongoose package and assign it to an variable  to connect mongoDB
const mongoose = require ('mongoose');

//declare a variable and initialize mongoose schema
const postSchema = new mongoose.Schema({

    //attibutes
    topic : {
        type: String,
        required: true
    },

    description : {
        type: String,
        required: true

    },

    postCategory : {
        type: String,
        required: true
    }


})

//export module

    //db name                   //db name 
const Post = mongoose.model("Post",postSchema);
module.exports = Post;



