const Course = require("./../models/course.model");
const CustomError = require("./../utils/custom-error");

class CourseService {
  async create(data) {
    return await new Course(data).save();
  }

  async getAll() {
    return await Course.find({});
  }

  async getOne(courseId) {
    const course = await Course.findOne({ _id: courseId });
    if (!course) throw new CustomError("Course does not exists");

    return course;
  }

 
}

module.exports = new CourseService();