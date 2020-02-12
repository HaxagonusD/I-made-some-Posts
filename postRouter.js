const router = require("express").Router();
const Post = require("./postModel")



router.post("/", async (req, res)=>{
    //retrive data from request
    const {title, createdAt, tags, html} = req.body;
    //construct the post model
    const newPost = new Post({
        title,
        createdAt,
        tags,
        html
    });



    try{
        const savedPost = await newPost.save();
        console.log(savedPost);
    } catch (err){
        console.error(err);   
    }
    
})

router.get("/", async (req, res)=>{
    const posts = await Post.find();
    res.json(posts);
})
module.exports = router;