const router = require("express").Router();
const parser  = require("./../services/cloudinary.service");
const TutorCtrl = require("./../controllers/tutor.controller");
const upload = require("./../middlewares/multer.middleware")

router.post("/lesson", parser.single('image') , TutorCtrl.createLesson);
router.get("/", TutorCtrl.getAll);
router.get("/:tutorId" ,TutorCtrl.getOne);
router.put("/:tutorId" ,TutorCtrl.update);
router.delete("/:tutorId" ,TutorCtrl.delete);


module.exports = router
