const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentTypeSchema = new Schema({
     name: {
        type: String,
        trim: true,
        required: [true, "Payment Type name is required"],

     },
      status: {
        type: Boolean,
        default: true,
      }
})


module.exports = mongoose.model("paymentType", paymentTypeSchema)
