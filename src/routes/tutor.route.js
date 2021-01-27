const router = require("express").Router();
const TutorCtrl = require("./../controllers/tutor.controller");
const multer = require('multer')
const videoUpload = multer({dest: '../../uploads/lessons'})
const imageUpload = multer({dest: '../../uploads/images'})

/*
Remember to protect all the routes for the user
*/


router.post("/course/create",imageUpload.any("img"), TutorCtrl.courseCreate);
router.post("/module/create", TutorCtrl.moduleCreate);
router.post("/lesson/create", videoUpload.any("video"), TutorCtrl.lessonCreate);
router.get("/course/:tutorId", TutorCtrl.getAllCourse)


//unused route for now
router.get("/:tutorId" ,TutorCtrl.getOne);
router.put("/:tutorId" ,TutorCtrl.update);
router.delete("/:tutorId" ,TutorCtrl.delete);


module.exports = router
  