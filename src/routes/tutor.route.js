const router = require("express").Router();
const {upload } = require("./../services/cloudinary.service");
const TutorCtrl = require("./../controllers/tutor.controller");
// const upload = require("./../middlewares/multer.middleware")


router.post("/course/create", TutorCtrl.courseCreate);
router.post("/module/create", TutorCtrl.moduleCreate);
router.post("/lesson/create", upload.single("video"), TutorCtrl.lessonCreate);
router.get("/", TutorCtrl.getAll)
router.get("/:tutorId" ,TutorCtrl.getOne);
router.put("/:tutorId" ,TutorCtrl.update);
router.delete("/:tutorId" ,TutorCtrl.delete);


module.exports = router
  