const PaymentServ = require("./../services/payment.service");
const Payment = require('./../models/payment.model')
const Transaction = require('./../models/transaction.model')
const CronJob = require('cron').CronJob;
const _ = require('lodash');
const request = require('request');
const {initializePayment, verifyPayment} = require('./../utils/paystack')(request);
const responses = require("./../utils/response");
const job = new CronJob('* * * * * *', function() {
  // console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');
job.start();

class PaymentContoller {

  async create(req, res) {
    const form = _.pick(req.body,[`amount`,`course_id`,`paymentType`,`email`,`firstName`,`lastName`,`user_id`]);
    console.log(form)

    // pass Custom data to Paystack
    form.metadata = {
      firstName : form.firstName,
      lastName : form.lastName,
      user_id: form.user_id.trim(),
      course_id : form.course_id.trim(),
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
      console.log(form)
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
          console.log(response);
          // const transaction = new Transaction(response)
          const data = _.at(response.data, ['reference','amount','customer.email','metadata.user_id', 'metadata.firstName','metadata.lastName','metadata.course_id','metadata.paymentType']);
          let [reference, amount, email, user_id, firstName, lastName, course_id, paymentType] = data;
          
          //change amount to Naira Value
          amount =  (amount/100)
          console.log(amount)

          //extract values to be saved to DB
          const newPay = {reference, amount, email, user_id, course_id, paymentType}
          const newTransaction = {reference, userid, courseid, response}

          const transaction = new Transaction(newTransaction)
          const pay = new Payment(newPay)

          //save to Database
          pay.save().then((pay)=>{
            transaction.save().then((pay) =>{
              if(paymentType == 'one-time'){
                let payment_id = pay._id
                let count = 30
                const newSubscription =  {payment_id, count}
                subscription.save()
              }
              console.log('transaction Saved!');
            }).catch((e)=> {
              console.log(e.response);
            })
            res.redirect('payment/success/'+pay._id);
            }).catch((e)=>{
              console.log(e.response);
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
