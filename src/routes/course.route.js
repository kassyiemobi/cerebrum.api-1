const router = require("express").Router();
const CourseCtrl = require("./../controllers/course.controller");



router.get("/view/:courseId", CourseCtrl.getAllLessons);
router.get("/:courseId", CourseCtrl.getOneCourse);
router.get("/", CourseCtrl.getAllCourses);
// router.get("/:courseId" ,CourseCtrl.getOne);






module.exports = router