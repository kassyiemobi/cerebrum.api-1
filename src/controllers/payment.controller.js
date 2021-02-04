const PaymentServ = require("./../services/payment.service");
const Payment = require('./../models/payment.model')
const CustomError = require("./../utils/custom-error");


const _ = require('lodash');
const request = require('request');
const {initializePayment, verifyPayment} = require('./../utils/paystack')(request);

const responses = require("./../utils/response");

class PaymentContoller {

  async create(req, res) {
    const form = _.pick(req.body,[`amount`,`course_id`,`paymentType`,`email`,`firstName`,`lastName`,`userId`]);
    console.log(form)

    // pass Custom data to Paystack
    form.metadata = {
      firstName : form.firstName,
      lastName : form.lastName,
      course_id : form.course_id,
      paymentType: form.paymentType
    }
    form.amount *= 100;
    initializePayment(form, (error, body)=>{
      if(error){
          //handle error
          console.log(error);
          res.status(403).send(responses("Error ecountered! Can't pay now!", error));
      }

      let response = JSON.parse(body);
      res.redirect(response.data.authorization_url)
    });

  } 

  //Test controller to render HTML for Payment test
  async getAll(req, res) {
    res.render(`index.pug`)
  
  }

  async callback(req, res) {
    
      const ref = req.query.reference;
      verifyPayment(ref, (error,body)=>{
          if(error){
              //handle errors appropriately
              console.log(error)
              // res.status(403).send(responses("Error ecountered! Payment Verification Failed!", error));
              return res.redirect('/error');
          }
          let response = JSON.parse(body);
          console.log(response.data.reference)
          
          const data = _.at(response.data, ['reference','amount','customer.email', 'metadata.firstName','metadata.lastName','metadata.course_id','metadata.paymentType']);
          const [reference, amount, email, firstName, lastName, course_id, paymentType] = data;
          console.log( data)
          const pay = new Payment(data).save().then((donor)=>{
            if(!pay){
              res.redirect('payment/failed');
            }
            res.redirect('payment/success/'+pay._id);

            }).catch((e)=>{
              res.redirect('payment/failed');
           });
      })
  
  }

  async addPaymentType(req, res) {
    const data = _.pick(req.body,['name'])
    const result = await PaymentServ.addPaymentType(data);
    res.status(200).send(responses("Payment Type added successfully", result));
  }
  
  

}

module.exports = new PaymentContoller();
