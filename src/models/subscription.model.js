const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
     payment_id: {
        type: Schema.Types.ObjectId,  
        required: [true, "Payment ID is required"],
        ref: "payment"

     },
      sub_date: {
        type: String,
        required: [true, "Subscription date is required"]
      },

      exp_date: {
        type: String,
        required: [true, "expiry Date is required"]
      
      },
      
      isActive: {
        type: Boolean,
        enum: [true, false],
        default: true,
      }

})


module.exports = mongoose.model("subscription", subscriptionSchema)
