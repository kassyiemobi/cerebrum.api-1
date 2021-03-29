const router = require("express").Router();
const CommentCtrl = require("./../controllers/comment.controller");

router.post("/", CommentCtrl.create);
router.get("/", CommentCtrl.getAll);
router.get("/:commentId" ,CommentCtrl.getOne);
router.put("/:commentId" ,CommentCtrl.update);
router.delete("/:commentId" ,CommentCtrl.delete);


module.exports = router