const CommentServ = require("./../services/comment.service");
 
const response = require("./../utils/response");

class CommentContoller {

  async create(req, res) {
    const result = await CommentServ.create(req.body);
    res.status(201).send(response("comment created", result));
  } 

  async getAll(req, res) {
    const result = await CommentServ.getAll();
    res.status(200).send(response("All comment", result));
  }

  async getOne(req, res) {
    const result = await CommentServ.getOne(req.params.commentId);
    res.status(200).send(response("comment data", result));
  }

  async update(req, res) {
    const result = await CommentServ.update(req.params.commentId, req.body);
    res.status(200).send(response("comment updated", result));
  }
  
  async delete(req, res) {
    const result = await CommentServ.delete(req.params.commentId);
    res.status(200).send(response("comment deleted", result));
  }

}

module.exports = new CommentContoller();
