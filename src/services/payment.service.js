const Payment = require("./../models/payment.model");
const PaymentType = require("./../models/paymentType.model");
const CustomError = require("./../utils/custom-error");

class PaymentService {

  
  async addPaymentType(data) {
    return await new PaymentType(data).save()
  }

  

  
}

module.exports = new PaymentService();