const Module = require("./../models/module.model");
const Course = require("./../models/course.model");
const Lesson = require("./../models/lesson.model");
const CustomError = require("./../utils/custom-error");

class CourseService {

  async getAllCourses(data) {
    const course = await Course.find({_id:data}, { __v: 0 });
    return course
  }


  async getAllLessons(data) {
    return await Lesson.find({course_id:data}, { __v: 0 });
  }

  async getAllModules(data) {
    return await Module.find({course_id:data}, { cloudinary: 0, __v: 0 });
  }

 
}

module.exports = new CourseService();