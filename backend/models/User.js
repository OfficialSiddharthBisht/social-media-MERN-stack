const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    avatar :{
        public_id: String,
        url : String,
    },
    email: {
        type: String,
        required: [true, "Please enter a valid email"],
        unique: [true, "Email already exhists"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [8, "Password must be 8 characters"],
        select: false,
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        }
    ],
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
})

module.exports = mongoose.model("User", userSchema);