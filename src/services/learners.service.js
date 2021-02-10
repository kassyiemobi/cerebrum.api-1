const Payment= require("./../models/payment.model");
const CustomError = require("./../utils/custom-error");

class LearnersService {

  async getAll() {
    return await Payment.find({user_id: userId});
  }


  async getOne(data) {
    const courseDetails = await Payment.findOne({course_id, user_id});
    if (!courseDetails) throw new CustomError("course does not exists for you");

    return lcourseDetails
  }

}

module.exports = new LearnersService();