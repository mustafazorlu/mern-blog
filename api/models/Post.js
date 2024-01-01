const mongoose = require("mongoose");
const {Schema} = mongoose;

const PostSchema = new mongoose.Schema(
    {
        title: String,
        summary: String,
        content: String,
        cover: String,
        author: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    {
        timestamps: true,
    }
);

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;
