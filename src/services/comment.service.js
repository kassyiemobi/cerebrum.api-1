const Comment = require("./../models/comment.model");
const CustomError = require("./../utils/custom-error");

class CommentService {

  async create(data) {
    return await new Comment(data).save();
  }

  async getAll() {
    return await Comment.find({});
  }

  async getOne(commentId) {
    const comment = await Comment.findOne({ _id: commentId });
    if (!comment) throw new CustomError("Comment does not exists");

    return comment
  }

  async update(commentId, data) {
    const comment = await Comment.findByIdAndUpdate(
    { _id: commentId },
    { $set: data },
    { new: true }
    );

    if (!comment) throw new CustomError("Comment dosen't exist", 404);

    return comment;
  }

  async delete(commentId) {
    const comment = await Comment.findOne({ _id: commentId });
    comment.remove()
    return comment
  }

}

module.exports = new CommentService();