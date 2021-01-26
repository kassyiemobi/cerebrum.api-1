const router = require("express").Router();
const CourseCtrl = require("./../controllers/course.controller");


router.get("/", CourseCtrl.getAll);
router.get("/:courseId" ,CourseCtrl.getOne);






module.exports = router