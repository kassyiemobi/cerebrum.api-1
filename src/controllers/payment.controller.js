const PaymentServ = require("./../services/payment.service");
const Payment = require('./../models/payment.model')
const Subscription = require('./../models/subscription.model')
const Transaction = require('./../models/transaction.model')
const CronJob = require('cron').CronJob;
const _ = require('lodash');
const request = require('request');
const {initializePayment, verifyPayment} = require('./../utils/paystack')(request);
const responses = require("./../utils/response");

//Add days to current date
function addDays(dateObj, numDays) {
  dateObj.setDate(dateObj.getDate() + numDays);
  return dateObj;
}

//Setting Date Values
let now = new Date();
let nextMonth = addDays(now, 30).toJSON().slice(0,10)
// console.log(nextMonth);

const job = new CronJob('59 59 23 * * *',async function() {
 
  let subscriptions = await Payment.updateMany({exp_date: new Date().toJSON().slice(0,10)}, {
    status: false
  })
  
  console.log('Subscription payment Update!')
  console.log(new Date().toJSON().slice(0,10))
  
  
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
      user_id: form.user_id,
      course_id : form.course_id,
      paymentType: form.paymentType
    }
    form.amount *= 100;
    initializePayment(form, (error, body)=>{
      if(error){
          //handle error
          console.log(error);
          // res.status(403).send(responses("Error ecountered! Can't pay now!", error));
          res.redirect('api/payment/error?msg=network')

      }

      let response = JSON.parse(body);
      console.log(form)
      const result = response.data.authorization_url
      res.status(200).send(responses("preparing to redirect for payment", result));


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
          const status = true
          
          const newPay = {reference, amount, email, user_id, course_id, paymentType, status}
          const newTransaction = {reference, user_id, course_id, response}
         
          

          //save to Database
          if(paymentType == 'subscription'){
            newPay.sub_date = new Date().toJSON().slice(0,10)
            newPay.exp_date = nextMonth
            let transaction = new Transaction(newTransaction)
            let pay = new Payment(newPay)
            pay.save()
            .then(()=>{
              console.log('Payment saved!');
              transaction.save()
                .then((pay)=> {
                  res.redirect('https://localhost:3000/user/course/payment/success/'+pay._id);
                })
                .catch((e)=>{
                  console.log(e);
                })
            })
            .catch((e)=>{
              console.log(e.response);
              res.redirect('https://localhost:3000/user/course/payment/fail/');
            });
          }else{
            newPay.sub_date = 0
            newPay.exp_date = 0
            let transaction = new Transaction(newTransaction)
            let pay = new Payment(newPay)
            pay.save()
            .then(()=>{
              console.log('Payment saved!');
              transaction.save()
                .then((pay)=> {
                  res.redirect('payment/success/'+pay._id);
                })
                .catch((e)=>{
                  console.log(e);
                })
            })
            .catch((e)=>{
              console.log(e.response);
              res.redirect('payment/failed');
            });

          }
      })
  
  }

  async addPaymentType(req, res) {
    const data = _.pick(req.body,['name'])
    const result = await PaymentServ.addPaymentType(data);
    res.status(200).send(responses("Payment Type added successfully", result));
  }
  
  async checkPayment(req, res) {
    const data = req.params.payment_id
    const result = await PaymentServ.checkPayment(data);
    res.status(200).send(responses("Payment Type added successfully", result));
  }
  
  

}

module.exports = new PaymentContoller();
