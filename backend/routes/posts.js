const express = require("express");


//import user model
const posts = require("../models/posts");

//invoke router interface
const router = express.Router();

//CRUD
//CREATE-----------------------------Use post http request----------------------------------------------------------------------------------------------

router.post('/post/save',(req,res)=>{

    //create variable and instantiate
    let newPost = new posts(req.body);

    //save
    newPost.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            })
        }

        return res.status(200).json({
            success:"posts saved successfully"
        })
    })
})

//READ-----------------------------Use get http request----------------------------------------------------------------------------------------------

router.get('/posts',(req,res)=>{

    posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }

        return res.status(200).json({
            success:true,
            existingPosts:posts
        })
    })
})

//UPDATE-----------------------------Use put http request------------------------------------------------------------------------------

router.put('/post/update/:id',(req,res)=>{
    posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({
                    error:"can not update"
                })
            }
            return res.status(200).json({
                success: "Updated Successfully"
            })

        }
    )
})

//DELETE-----------------------------Use delete http request----------------------------------------------------------------------------

router.delete('/post/delete/:id',(req,res)=>{

    posts.findByIdAndDelete(req.params.id).exec((err,deletedPost)=>{

        if(err) return res.status(400).json({
            message: "Deleted unsuccussfull",err
        })

        return res.json({
            message: "Deleted succussfully",deletedPost
        })

    })
})

//get specific post

router.get("/post/:id",(req,res)=>{

    let postId = req.params.id;
    posts.findById(postId,(err,post)=>{

        if(err){
            return res.status(400).json({success:false,err})
        }

        return res.status(200).json({
            success:true,
            post
        })
    })

 
})

//export the module

module.exports = router;