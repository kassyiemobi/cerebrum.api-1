const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moduleSchema = new Schema({
  name: {
    type: String,
    required: [true, "Module name is required!"],
  },

  course_id: {
    type: String,
    //type: Schema.Types.ObjectId,
    required: true,
    ref: "course",
  },
});





module.exports = mongoose.model("module", moduleSchema)
