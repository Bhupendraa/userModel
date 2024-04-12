const express =require("express");
const router = express.Router();

const{dummyController,createComment}= require("../Controller/commentController");

const{createPost,fetchAllPosts} = require("../Controller/postController");
const{likePost,unlikePost} = require("../Controller/likeController")



router.get("/dummy",dummyController);

router.post("/likePost",likePost)
router.post("/createComment",createComment)
router.get("/getAllPosts",fetchAllPosts)
router.post("/createPost",createPost)
router.post("/unlikePost",unlikePost)




module.exports  = router;