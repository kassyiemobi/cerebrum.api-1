const router = require("express").Router();

router.use("/auth", require("./auth.route"));
router.use("/users", require("./user.route"));
router.use("/course", require("./course.route"));
router.use("/tutor", require("./tutor.route"));
router.use("/learner", require("./learner.route"));
router.use("/category", require("./category.route"));

 
module.exports = router