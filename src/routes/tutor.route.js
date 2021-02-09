const router = require("express").Router();
const TutorCtrl = require("./../controllers/tutor.controller");
const {upload} = require('../middlewares/multer.middleware')


router.post("/course/create", upload.any("img"), TutorCtrl.courseCreate);
router.post("/module/create", TutorCtrl.moduleCreate);
router.post("/lesson/create", upload.any("video"), TutorCtrl.lessonCreate);
router.get("/course/:tutorId", TutorCtrl.getAllCourse)




//unused route for now
// router.get("/:tutorId" ,TutorCtrl.getOne);
// router.put("/:tutorId" ,TutorCtrl.update);
// router.delete("/:tutorId" ,TutorCtrl.delete);


module.exports = router
  