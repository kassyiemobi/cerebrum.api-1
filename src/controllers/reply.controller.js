const ReplyServ = require("./../services/reply.service");
 
const response = require("./../utils/response");

class ReplyContoller {

  async create(req, res) {
    const result = await ReplyServ.create(req.body);
    res.status(201).send(response("reply created", result));
  } 

  async getAll(req, res) {
    const result = await ReplyServ.getAll();
    res.status(200).send(response("All reply", result));
  }

  async getOne(req, res) {
    const result = await ReplyServ.getOne(req.params.replyId);
    res.status(200).send(response("reply data", result));
  }

  async update(req, res) {
    const result = await ReplyServ.update(req.params.replyId, req.body);
    res.status(200).send(response("reply updated", result));
  }
  
  async delete(req, res) {
    const result = await ReplyServ.delete(req.params.replyId);
    res.status(200).send(response("reply deleted", result));
  }

}

module.exports = new ReplyContoller();
