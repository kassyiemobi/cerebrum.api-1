const router = require("express").Router();
const CourseCtrl = require("./../controllers/course.controller");


router.get("/", CourseCtrl.getAll);
router.get("/:name" ,CourseCtrl.getOne);
router.post("/", CourseCtrl.create);




module.exports = router