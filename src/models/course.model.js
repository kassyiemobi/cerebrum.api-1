const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  //_id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: [true, "course name is required!"],
  },

  image_url: {
    type: String,
    required: [true, "course image must be included"],
    default: "https://www.seekpng.com/ima/u2q8u2w7e6y3a9a9/"
  },

  tutor_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "Tutor Id is required"]
    },
  ],

  price: {
    type: Number,
    required: [true, "A course must have a price"],
  },

  category: {
    type: String,
    required: [true, "Category is required"] 
  },

  description: {
    type: String,
    required: [true, "A course description is required"],
  },
  isActive: {
    type: String,
    enum: [true, false],
    default: true,
  },
});

courseSchema.pre('save', async function (next) {
  await this.populate({
    path: "tutor_id",
    select: "firstName lastName image_url",
  });
});

module.exports = mongoose.model("course", courseSchema);
