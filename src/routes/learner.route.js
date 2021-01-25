const router = require("express").Router();
const LearnersCtrl = require("../controllers/learners.controller");

router.get("/courses", LearnersCtrl.getAll);
router.get("/course/:courseId", LearnersCtrl.getOne);


module.exports = router