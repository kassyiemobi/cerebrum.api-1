const learnersCourses= require("./../models/learnersCourses.model");
const CustomError = require("./../utils/custom-error");

class LearnersService {

  //this is to find all the courses of a particular user

  async getAll() {
    return await learnersCourses.find({user: userId});
  }

  //this finds one of the courses of a particular user

  async getOne(courseId) {
    const learners = await learnersCourses.findOne({ _id: courseId });
    if (!learnersCourses) throw new CustomError("course does not exists");

    return learnersCourses
  }

}

module.exports = new LearnersService();