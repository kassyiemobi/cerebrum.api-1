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

  

  
}

module.exports = new PaymentService();