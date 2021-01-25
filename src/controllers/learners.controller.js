
const learnersService = require("./../services/learners.service"); 
const response = require("./../utils/response");

class LearnersContoller {
    
  async getAll(req, res) {
    const result = await learnersService.getAll();
    res.status(200).send(response("all courses", result));
  }

  async getOne(req, res) {
    const result = await learnersService.getOne(req.params.courseId);
    res.status(200).send(response("learners data", result));
  }

}

module.exports = new LearnersContoller();
