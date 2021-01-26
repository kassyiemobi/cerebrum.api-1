const router = require("express").Router();
const CategoryCtrl = require("./../controllers/category.controller");

//get all the categories
router.post("/", CategoryCtrl.create); 
router.get("/", CategoryCtrl.getAll); 






module.exports = router