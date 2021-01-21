const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  //_id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: [true, "course name is required!"],
  },
  img: {
    type: String,
    required: [true, "course image must be included"],
  },

  tutor: [{ 
       type: Schema.Types.ObjectId, 
       ref: "user" }],

  price: {
    type: Number,
    required: [true, "A course must have a price"],
  },

  description: {
    type: String,
    required: [true, "A course description is required"],
  },
});

courseSchema.pre(/^find/, async function (next) {
     await this.populate({
       path: "tutor",
       select: "firstName lastName",
     });
});


module.exports = mongoose.model("course", courseSchema)
