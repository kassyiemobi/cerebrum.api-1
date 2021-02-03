const CourseServ = require("./../services/course.service");
const response = require("./../utils/response");

class CourseContoller{
  
  async getAllLessons(req, res) {
    const result = await CourseServ.getAllLessons(req.params.courseId);
    res.status(200).send(response("All the Lessons for this course", result));
  }

  async getAllModules(req, res) {
    const result = await CourseServ.getAllModules(req.params.courseId);
    res.status(200).send(response("All the Modules for this course", result));
  }

  async getAllCourses(req, res) {
    const result = await CourseServ.getAllCourses();
    const game = result.map(lesson => {
      console.log(lesson)
    })
console.log(result.price);
    res.status(200).send(response("All the Modules for this course", result));
  }

}

module.exports = new CourseContoller();
