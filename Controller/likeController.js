const Like = require("../Model/likeModel");
const Post = require("../Model/postModel");

exports.likePost = async(req,res)=>{
    try{
        const{post,user} = req.body;

        const like = new Like({
            post,user
        })
        const savedLike = await like.save();

        const updatePost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
        .populate()
        .exec()

        res.json({
            post:updatePost
        })

    }
    catch(error)
    {
        res.status(400).json({
            success:false,
            message:"Not creating like model"
        })
    }
}

// unlike post from the database 


exports.unlikePost = async(req,res) =>{
    try{

    
    const{post,like} = req.body

    const deleteOne = await Like.findOneAndDelete({post:post,_id:like})

    // updated the post collection

    const updatePost = await Post.findByIdAndUpdate(post,{$pull:{likes:deleteOne._id}},{new:true})

    res.json({
        post:updatePost
    })
    }
    catch(error)
    {
        return res.status(400).json({
            success:false,
            message:"NOT able to unlike the post "
        })
    }


    

}