const router = require("express").Router();
const TutorCtrl = require("./../controllers/tutor.controller");
const multer = require('multer')
const upload = multer({dest: 'files'})
// const imageUpload = multer({dest: 'files'})

/*
Remember to protect all the routes for the user
*/


router.post("/course/create", upload.any("img"), TutorCtrl.courseCreate);
router.post("/module/create", TutorCtrl.moduleCreate);
router.post("/lesson/create", upload.any("video"), TutorCtrl.lessonCreate);
router.get("/course/:tutorId", TutorCtrl.getAllCourse)


//unused route for now
router.get("/:tutorId" ,TutorCtrl.getOne);
router.put("/:tutorId" ,TutorCtrl.update);
router.delete("/:tutorId" ,TutorCtrl.delete);


module.exports = router
  