const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moduleSchema = new Schema({
  name: {
    type: String,
    required: [true, "Module name is required!"],
  },
});



module.exports = mongoose.model("module", moduleSchema)
