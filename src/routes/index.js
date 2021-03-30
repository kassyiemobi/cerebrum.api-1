const router = require("express").Router();

router.use("/auth", require("./auth.route"));
router.use("/user", require("./user.route"));
router.use("/course", require("./course.route"));
router.use("/tutor", require("./tutor.route"));
router.use("/learner", require("./learner.route"));
router.use("/category", require("./category.route"));
router.use("/search", require("./search.route"));
router.use("/payment", require("./payment.route"));
 
module.exports = router