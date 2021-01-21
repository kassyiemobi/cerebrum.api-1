const CourseServ = require("./../services/course.service");

const response = require("./../utils/response");

class CourseContoller {
  async create(req, res) {
    const result = await CourseServ.create(req.body);
    res.status(201).send(response("course created", result));
  }

  async getAll(req, res) {
    const result = await CourseServ.getAll();
    res.status(200).send(response("All course", result));
  }

  async getOne(req, res) {
    const result = await CourseServ.getOne(req.params.courseId);
    res.status(200).send(response("course data", result));
  }

  async getThemAll(req, res) {
    const result = await CourseServ.getThemAll();
    res.status(200).send(response("All course and their modules", result));
  }

  async update(req, res) {
    const result = await CourseServ.update(req.params.courseId, req.body);
    res.status(200).send(response("course updated", result));
  }

  async delete(req, res) {
    const result = await CourseServ.delete(req.params.courseId);
    res.status(200).send(response("course deleted", result));
  }
}

module.exports = new CourseContoller();
