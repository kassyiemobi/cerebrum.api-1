const router = require("express").Router();
const parser  = require("./../services/cloudinary.service");
const TutorCtrl = require("./../controllers/tutor.controller");
const upload = require("./../middlewares/multer.middleware")


router.post("/course/create", upload("course-image"),TutorCtrl.courseCreate);
router.post("/module/create", TutorCtrl.moduleCreate);
router.post("/lesson/create", upload("video"), TutorCtrl.lessonCreate);
router.get("/", TutorCtrl.getAll)
router.get("/:tutorId" ,TutorCtrl.getOne);
router.put("/:tutorId" ,TutorCtrl.update);
router.delete("/:tutorId" ,TutorCtrl.delete);


module.exports = router
  