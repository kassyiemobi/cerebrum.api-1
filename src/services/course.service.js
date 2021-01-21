const Course = require("./../models/course.model");
const CustomError = require("./../utils/custom-error");

class CourseService {
  async create(data) {
    return await new Course(data).save();
  }

  async getAll() {
    return await Course.find({});
  }
  async getThemAll() {
    return await Course.find({});
  }

  async getOne(courseId) {
    const course = await Course.findOne({ _id: courseId });
    if (!course) throw new CustomError("Course does not exists");

    return course;
  }

  async update(courseId, data) {
    const course = await Course.findByIdAndUpdate(
      { _id: courseId },
      { $set: data },
      { new: true }
    );

    if (!course) throw new CustomError("Course dosen't exist", 404);

    return course;
  }

  async delete(courseId) {
    const course = await Course.findOne({ _id: courseId });
    course.remove();
    return course;
  }
}

module.exports = new CourseService();