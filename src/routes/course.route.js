const router = require("express").Router();
const CourseCtrl = require("./../controllers/course.controller");

/*const { role } = require("../config");
const auth = require("../middlewares/auth.middleware");
*/

router.get("/", CourseCtrl.getAll);
router.get("/:courseId" ,CourseCtrl.getOne);






module.exports = router