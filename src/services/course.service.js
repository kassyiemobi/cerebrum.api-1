const Module = require("./../models/module.model");
const Course = require("./../models/course.model");
const Lesson = require("./../models/lesson.model");
const User = require("./../models/user.model");
const CustomError = require("./../utils/custom-error");

class CourseService {

  async getAllCourses(data) {
    const course = await Course.find({_id:data}, { __v: 0 });
    return course
  }


  async getAllLessons(data) {
    const lesson = await Lesson.find({course:data}, { __v: 0 }).populate({
      path: "courses",
      select: "name" });

    return lesson
  }

  async getAllModules(data) {
    return await Module.find({course_id:data}, { cloudinary: 0, __v: 0 });
  }

 
}

module.exports = new CourseService();