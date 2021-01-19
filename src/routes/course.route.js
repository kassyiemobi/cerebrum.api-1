const router = require("express").Router();
const CourseCtrl = require("./../controllers/course.controller");


router.get("/", CourseCtrl.getAll);
router.get("/:name" ,CourseCtrl.getOne);



module.exports = router