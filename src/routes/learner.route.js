const router = require("express").Router();
const LearnersCtrl = require("../controllers/learners.controller");
const auth = require("./../middlewares/auth.middleware");
const { role } = require("./../config");


// router.get("/courses", auth(role.LEARNER),LearnersCtrl.getAll);
// router.get("/course/:courseId", auth(role.LEARNER), LearnersCtrl.getOne);



module.exports = router