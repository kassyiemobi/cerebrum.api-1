const PaymentServ = require("./../services/payment.service");
const Payment = require('./../models/payment.model')

const _ = require('lodash');
const request = require('request');
const {initializePayment, verifyPayment} = require('./../utils/paystack')(request);

const responses = require("./../utils/response");

class PaymentContoller {

  async create(req, res) {
    const form = _.pick(req.body,[`amount`,`email`,`full_name`]);
    console.log(form)

    form.metadata = {
      full_name : form.full_name
    }
    form.amount *= 100;
    initializePayment(form, (error, body)=>{
        if(error){
            //handle errors
            console.log(error);
            return;
      }
      let response = JSON.parse(body);
      res.redirect(response.data.authorization_url)
    });

  } 

  async getAll(req, res) {
    res.render(`index.pug`)
    // const result = await PaymentServ.getAll();
    // res.status(200).send(response("All payment", result));
  }

  async callback(req, res) {
    
      const ref = req.query.reference;
      verifyPayment(ref, (error,body)=>{
          if(error){

              //handle errors appropriately
              // console.log(error)
              return res.redirect('/error');
          }
          let response = JSON.parse(body);
          console.log(response.data)
          const data = _.at(response.data, ['reference','amount','customer.email', 'metadata.full_name']);
          const [reference, amount, email, full_name] = data;
          const newDonor = {reference, amount, email, full_name}
          const donor = new Payment(newDonor)
          donor.save().then((donor)=>{
              if(donor){
                  res.redirect('/receipt/'+donor._id);
              }
          }).catch((e)=>{
              res.redirect('/error');
          })
      })
  
  }

  async update(req, res) {
    const result = await PaymentServ.update(req.params.paymentId, req.body);
    res.status(200).send(responses("payment updated", result));
  }
  
  async delete(req, res) {
    const result = await PaymentServ.delete(req.params.paymentId);
    res.status(200).send(responses("payment deleted", result));
  }

}

module.exports = new PaymentContoller();
