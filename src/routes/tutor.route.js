const router = require("express").Router();
const TutorCtrl = require("./../controllers/tutor.controller");

router.post("/lesson", TutorCtrl.createLesson);
router.get("/", TutorCtrl.getAll);
router.get("/:tutorId" ,TutorCtrl.getOne);
router.put("/:tutorId" ,TutorCtrl.update);
router.delete("/:tutorId" ,TutorCtrl.delete);


module.exports = router