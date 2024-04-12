const Post = require("../Model/postModel");
const Comment = require("../Model/commentModel");

// bussiness logic for controller comment

exports.createComment = async(req,res)=>{
    try{
        // fetch data from the comment model
        const{post,user,body} = req.body

        // create a comment Object in a new way

        const comment = new Comment({
            post,user,body
        });

        // save the the comment model into the database
        const savedComment = await comment.save();

        // find the post id and  add the new connect to its comments array

        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
        .populate("comments")
        .exec();
        res.json({
            post:updatedPost,
        })

    }
    catch(error)
    {
        return res.status(401).json({
            success:false,
            message:"not creating the comment"
        })
    }
}




exports.dummyController = (req,res)=>{
    res.send("This is my dummy page");
}