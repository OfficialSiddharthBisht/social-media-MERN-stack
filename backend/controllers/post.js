const Post = require("../models/Post");

exports.createPost = async (req, res) => {
    try {
        const newPostData = {
            caption: req.body.caption,
            image: {
                public_id: "",
                url: ""
            },
            owner: req.user._id
        }
        const newPost = await Post.create(newPostData);
        // new post will be afterwards pushed to post array of the user
        res.status(201).json({
            success: true,
            post : newPost,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}