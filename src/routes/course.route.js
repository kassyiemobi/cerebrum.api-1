const router = require("express").Router();
const CourseCtrl = require("./../controllers/course.controller");



router.get("/:courseId", CourseCtrl.getAllLessons);
// router.get("/:courseId" ,CourseCtrl.getOne);






module.exports = router