const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
      response: {
        type: Object,
        conditions: [{}]

      },
      user_id: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },

      course_id: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
})


module.exports = mongoose.model("transaction", transactionSchema)
