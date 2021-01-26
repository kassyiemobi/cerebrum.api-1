const CustomError = require("./../utils/custom-error");
const Category = require ("./../models/Category.model") 

class CategoryService {
  async create(data) {
    //check if category is added already
    let name =  data.name
    const category =  Category.findOne({name: name})
    if (category) throw new CustomError(`Category already added`)

    return await new Category(data).save();
  }

//for the Category to find his own courses
  async getAll() {
    return await Category.find({});
  }
}

module.exports = new CategoryService();