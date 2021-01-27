const Course = require("./../models/course.model");
const Lesson = require("./../models/lesson.model");
const CustomError = require("./../utils/custom-error");

class CourseService {

  // async create(data) {
  //   return await new Course(data).save();
  // }

  async getAllLessons(data) {
    course_id = data.courseId
    return await Lesson.find({course_id});
  }

  // async getOne(courseId) {
  //   const course = await Course.findOne({ _id: courseId });
  //   if (!course) throw new CustomError("Course does not exists");

  //   return course;
  // }

 
}

module.exports = new CourseService();