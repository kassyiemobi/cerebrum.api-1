const Payment = require("./../models/payment.model");
const PaymentType = require("./../models/paymentType.model");
const CustomError = require("./../utils/custom-error");
const _ = require('lodash');


class PaymentService {

  async addPaymentType(data) {
    return await new PaymentType(data).save()
  }
  
  async checkPayment(data) {
    let result = await Payment.find({_id:data}) 
    if(_.isEmpty(result)) throw new CustomError('This payment could not be found! You can not access this course', 403)
    return result
  }

  async confirmPayment(data) {
    const user_id = data.user_id;
    const course_id = data.course_id
    let result = await Payment.find({course_id, user_id}) 
    if(_.isEmpty(result)) throw new CustomError('This user has never paid for this course', 403)
    if(result.status == false) throw new CustomError('This user payment subscription for this course has expired', 403)
    return result
  }

  async getUserPayment(data) {
    let result = await Payment.find({user_id:data}) 
    if(_.isEmpty(result)) throw new CustomError('You do not have any payment record', 403)
    return result
  }

  

  
}

module.exports = new PaymentService();