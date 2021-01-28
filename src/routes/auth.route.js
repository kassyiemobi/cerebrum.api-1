const router = require("express").Router();
const AuthCtrl = require("./../controllers/auth.controller");
const auth = require("./../middlewares/auth.middleware");
const { role } = require("./../config");
const { upload } = require('../middlewares/multer.middleware')
// const imageUpload = multer({dest: 'uploads'})

router.post("/sign-up", AuthCtrl.signup);
router.post("/sign-in", AuthCtrl.signin);
router.post("/request-email-verification", AuthCtrl.RequestEmailVerification);
router.post("/verify-email", AuthCtrl.VerifyEmail);
router.post("/request-password-reset", AuthCtrl.RequestPasswordReset);
router.post("/reset-password", AuthCtrl.resetPassword);
router.patch("/update-profile", auth(role.LEARNER), upload.single("user_image"), AuthCtrl.updateProfile);

module.exports = router;
