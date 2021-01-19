const router = require("express").Router();
const CourseCtrl = require("./../controllers/course.controller");

router.post("/", CourseCtrl.create);
router.get("/", CourseCtrl.getAll);
router.get("/:courseId" ,CourseCtrl.getOne);
router.put("/:courseId" ,CourseCtrl.update);
router.delete("/:courseId" ,CourseCtrl.delete);


module.exports = router