const PaymentServ = require("./../services/payment.service");
 
const response = require("./../utils/response");

class PaymentContoller {

  async create(req, res) {
    const result = await PaymentServ.create(req.body);
    res.status(201).send(response("payment created", result));
  } 

  async getAll(req, res) {
    const result = await PaymentServ.getAll();
    res.status(200).send(response("All payment", result));
  }

  async getOne(req, res) {
    const result = await PaymentServ.getOne(req.params.paymentId);
    res.status(200).send(response("payment data", result));
  }

  async update(req, res) {
    const result = await PaymentServ.update(req.params.paymentId, req.body);
    res.status(200).send(response("payment updated", result));
  }
  
  async delete(req, res) {
    const result = await PaymentServ.delete(req.params.paymentId);
    res.status(200).send(response("payment deleted", result));
  }

}

module.exports = new PaymentContoller();
