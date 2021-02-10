const CustomError = require("./../utils/custom-error");
const Category = require ("./../models/category.model") 
const Course = require ("./../models/course.model") 

class CategoryService {
  async create(data) {
    //check if category is added already
    let name =  data.name
    const category =  await Category.findOne({name: name})
    if (category) throw new CustomError(`Category already added`)

    return await new Category(data).save();
  }

//for the Category to find his own courses
  async getAll() {
    const result = await Category.find({});
    if(!result) throw new CustomError("No course in the database!", 403)
    return result
  }

  async getCourseCategory(data) {
    // console.log(data);  
    const result   = await Course.find({category:data});
    if(!result) throw new CustomError("No course in this Category", 403)
    return result
  }
}

module.exports = new CategoryService();