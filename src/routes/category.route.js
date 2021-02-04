const router = require("express").Router();
const CategoryCtrl = require("./../controllers/category.controller");
const auth = require("./../middlewares/auth.middleware");
const { role } = require("./../config");
//get all the categories
router.post("/", auth(role.ADMIN), CategoryCtrl.create); 
router.get("/", CategoryCtrl.getAll); 






module.exports = router