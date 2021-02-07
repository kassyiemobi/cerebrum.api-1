const router = require("express").Router();
const CategoryCtrl = require("./../controllers/category.controller");
const auth = require("./../middlewares/auth.middleware");
const { role } = require("./../config");
const categoryController = require("./../controllers/category.controller");
//get all the categories
router.post("/", auth(role.ADMIN), CategoryCtrl.create); // create category 
router.get("/", CategoryCtrl.getAll); // return all categories
router.get("/course/:name", CategoryCtrl.getCourseCategory); // return courses based on category 


module.exports = router