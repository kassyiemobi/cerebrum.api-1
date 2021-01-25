const router = require("express").Router();
const TutorCtrl = require("./../controllers/tutor.controller");

router.post("/course/create", TutorCtrl.courseCreate);
router.post("/module/create", TutorCtrl.moduleCreate);
router.post("/lesson/create", TutorCtrl.lessonCreate);
router.get("/", TutorCtrl.getAll)
router.get("/:tutorId" ,TutorCtrl.getOne);
router.put("/:tutorId" ,TutorCtrl.update);
router.delete("/:tutorId" ,TutorCtrl.delete);


module.exports = router
