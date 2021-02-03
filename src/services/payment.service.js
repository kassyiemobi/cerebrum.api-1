const Payment = require("./../models/payment.model");
const CustomError = require("./../utils/custom-error");

class PaymentService {

  async create(data) {
    return await new Payment(data).save();
  }

  async getAll() {
    return await Payment.find({});
  }

  async getOne(paymentId) {
    const payment = await Payment.findOne({ _id: paymentId });
    if (!payment) throw new CustomError("Payment does not exists");

    return payment
  }

  async update(paymentId, data) {
    const payment = await Payment.findByIdAndUpdate(
    { _id: paymentId },
    { $set: data },
    { new: true }
    );

    if (!payment) throw new CustomError("Payment dosen't exist", 404);

    return payment;
  }

  async delete(paymentId) {
    const payment = await Payment.findOne({ _id: paymentId });
    payment.remove()
    return payment
  }

}

module.exports = new PaymentService();