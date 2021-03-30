const CourseServ = require("./../services/course.service");
const response = require("./../utils/response");

class CourseContoller{
  
  async getAllLessons(req, res) {
    //enable nested route
    if (!req.body.course) req.body.course = req.params.courseId;
    if (!req.body.user) req.body.user = req.$user.id;
    const result = await CourseServ.getAllLessons(req.params.course_id);
    res.status(200).send(response("All the Lessons for this course", result));
  }

  async getAllModules(req, res) {
    const result = await CourseServ.getAllModules(req.params.courseId);
    res.status(200).send(response("All the Modules for this course", result));
  }

  async getAllCourses(req, res) {
    const result = await CourseServ.getAllCourses();
    res.status(200).send(response("All the Modules for this course", result));
  }

  async getOneCourse(req, res) {
    const result = await CourseServ.getOneCourse(req.params.course_id);
    res.status(200).send(response("Details of one Course", result));
  }
  

}

module.exports = new CourseContoller();
