const UserServ = require("./../services/user.service");
const response = require("./../utils/response");


class UserContoller {
  async create(req, res) {
    const result = await UserServ.create(req.body);
    res.status(200).send(response("User created", result));
  }

  async getUserCourse(req, res) {
    const result = await UserServ.getUserCourse(req.params.courseId);
    res.status(200).send(response("All User Courses", result));
  }

  async getOne(req, res) {
    const result = await UserServ.getOne(req.params.userId);
    res.status(200).send(response("User data", result));
  }

  async update(req, res) {
    const result = await UserServ.update(req.params.userId, req.body);
    res.status(200).send(response("User updated", result));
  }

  async delete(req, res) {
    const result = await UserServ.delete(req.params.userId);
    res.status(200).send(response("User deleted", result));
  }

  async deleteAll(req, res) {
    const result = await UserServ.deleteAll();
    res.status(200).send(response("All User deleted", result));
  }
}

module.exports = new UserContoller();
