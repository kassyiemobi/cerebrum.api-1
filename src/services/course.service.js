const Module = require("./../models/module.model");
const Course = require("./../models/course.model");
const Lesson = require("./../models/lesson.model");
const User = require("./../models/user.model");
const CustomError = require("./../utils/custom-error");

class CourseService {

  async getAllCourses() {
    const course = await Course.find({}, { __v: 0 });
    if (!course) throw new CustomError("Oops! No course created by any tutor", 403)
    return course
  }
  async getOneCourse(data) {
    const course = await Course.find({_id:data}, { __v: 0 }) .populate('comment');
    if (!course) throw new CustomError("Course details not avaliable", 403)
    return course;
  }


  async getAllLessons(data) {
    const lesson = await Lesson.find({course_id:data}, { __v: 0 })
    if (!lesson) throw new CustomError("Oops! Course doesn't have any lesson now", 403)
    return lesson
  }

  async getAllModules(data) {
    const module =  await Module.find({course_id:data}, { cloudinary: 0, __v: 0 });
    if (!module) throw new CustomError("Oops! Course doesn't have any Module now", 403)
    return module

  }

 
}

module.exports = new CourseService();