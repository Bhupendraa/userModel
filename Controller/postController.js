const Post = require("../Model/postModel");
exports.createPost = async(req,res)=>{
    try{
        const{title,body} = req.body;
        const post = new Post({
            title,body
        })
        
        const savePost = await post.save();
      
        res.json({
            post:savePost
        })

    }
    catch(error)

    {
        return res.status(500).json({
            success:false,
            message:"Not Creating the post"

        })
    }
}


exports.fetchAllPosts =async(req,res)=>{
    try{

    
    const fetchComments = await Post.find().populate("comments").populate("likes").exec();
    res.json({
      fetchComments
    })


    }
    catch(error)
    {
        return res.json({
            success:false,
            message:"Not fetch all comments"
        })
    }


} 