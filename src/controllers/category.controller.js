const { uploads, cloudUpload } = require("../services/cloudinary.service");
const categoryServ = require("./../services/category.service");
const response = require("./../utils/response");

class categoryContoller {
  async create(req, res) {
    const result = await categoryServ.create(req.body);
    res.status(201).send(response("category created", result));
  }


  async getAll(req, res) {
    const result = await categoryServ.getAll();
    res.status(200).send(response("All category categorys", result));
  }

  async getCourseCategory(req, res) {
    const result = await categoryServ.getCourseCategory(req.categoryName);
    res.status(200).send(response("All category categorys", result)); 
  }

}

module.exports = new categoryContoller();
