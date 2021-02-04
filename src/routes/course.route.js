const router = require("express").Router();
const CourseCtrl = require("./../controllers/course.controller");



router.get("/view/:course_id", CourseCtrl.getAllLessons);
router.get("/:course_id", CourseCtrl.getOneCourse);
router.get("/", CourseCtrl.getAllCourses);
// router.get("/:courseId" ,CourseCtrl.getOne);






module.exports = router