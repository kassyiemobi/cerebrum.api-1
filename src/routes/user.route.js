const router = require("express").Router();
const UserCtrl = require("./../controllers/user.controller");
const auth = require('./../middlewares/auth.middleware');
const upload = require("./../middlewares/multer.middleware")
const { role } = require("./../config")

router.post("/", auth(role.ADMIN), upload("image"), UserCtrl.create);
router.get("/", auth(role.ADMIN), UserCtrl.getAll);
router.get("/:userId", auth(role.ADMIN), UserCtrl.getOne);
router.put("/:userId", auth(role.ADMIN), upload("image"), UserCtrl.update);
router.delete("/:userId", auth(role.ADMIN), UserCtrl.delete);
router.delete("/delete/all", UserCtrl.deleteAll);


module.exports = router 