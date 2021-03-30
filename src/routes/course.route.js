const router = require("express").Router();
const CourseCtrl = require("./../controllers/course.controller");
const CommentCtrl = require("./../controllers/comment.controller");
const AuthCtrl = require("./../controllers/auth.controller");
const auth = require("./../middlewares/auth.middleware");
const { role } = require("./../config");



router.get("/view/:course_id", CourseCtrl.getAllLessons);
router.get("/:course_id", CourseCtrl.getOneCourse);
router.get("/", CourseCtrl.getAllCourses);
// router.get("/:courseId" ,CourseCtrl.getOne);


router.post("/:courseId/comment",auth(role.LEARNER), CommentCtrl.create);
router.get("/:courseId/comment", CommentCtrl.getAll);
router.get("/:courseId/comment/:commentId", CommentCtrl.getOne);
router.put("/:courseId/comment/:commentId", auth(role.LEARNER), CommentCtrl.update);
router.delete("/:courseId/comment/:commentId",auth(role.LEARNER), CommentCtrl.delete);
router.post(
  "/:courseId/comment/:commentId/reply",
  auth(role.LEARNER),
  
);






module.exports = router