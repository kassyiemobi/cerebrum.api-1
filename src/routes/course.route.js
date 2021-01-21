const router = require("express").Router();
const courseController = require("./../controllers/course.controller");
const CourseCtrl = require("./../controllers/course.controller");
const { role } = require("../config");
const auth = require("../middlewares/auth.middleware");


router.get("/", CourseCtrl.getAll);
router.get("/:courseId" ,CourseCtrl.getOne);
router.post("/", auth(role.TUTOR), CourseCtrl.create);
router.get("/course-module-lessons", courseController.getThemAll)




module.exports = router