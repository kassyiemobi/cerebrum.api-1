const router = require("express").Router();
const AuthCtrl = require("./../controllers/auth.controller");
const auth = require("./../middlewares/auth.middleware");
const { role } = require("./../config");
const multer = require('multer')
const imageUpload = multer({dest: '../../uploads/images'})

router.post("/sign-up", AuthCtrl.signup);
router.post("/sign-in", AuthCtrl.signin);
router.post("/request-email-verification", AuthCtrl.RequestEmailVerification);
router.post("/verify-email", AuthCtrl.VerifyEmail);
router.post("/request-password-reset", AuthCtrl.RequestPasswordReset);
router.post("/reset-password", AuthCtrl.resetPassword);
router.patch("/update-profile", auth(role.LEARNER), auth(role.USER), imageUpload.single("user_image"), AuthCtrl.updateProfile);

module.exports = router;
