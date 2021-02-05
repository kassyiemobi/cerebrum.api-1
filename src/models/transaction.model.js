const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentTypeSchema = new Schema({
     transaction: {
        type: Object,
        conditions: [{}]

     },
      user_id: {
        type: Schema.Types.ObjectId,
        ref: "user",
      }
})


module.exports = mongoose.model("paymentType", paymentTypeSchema)
