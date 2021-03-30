const Reply = require("./../models/reply.model");
const CustomError = require("./../utils/custom-error");

class ReplyService {

  async create(data) {
    return await new Reply(data).save();
  }

  async getAll() {
    return await Reply.find({});
  }

  async getOne(replyId) {
    const reply = await Reply.findOne({ _id: replyId });
    if (!reply) throw new CustomError("Reply does not exists");

    return reply
  }

  async update(replyId, data) {
    const reply = await Reply.findByIdAndUpdate(
    { _id: replyId },
    { $set: data },
    { new: true }
    );

    if (!reply) throw new CustomError("Reply dosen't exist", 404);

    return reply;
  }

  async delete(replyId) {
    const reply = await Reply.findOne({ _id: replyId });
    reply.remove()
    return reply
  }

}

module.exports = new ReplyService();