const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  name: {
    type: String,
    required: [true, "lesson name is required!"],
  },
  video: {
    type: String,
    required: [true, "lesson media must be included"],
  },
  description: {
    type: String,
    required: [true, "Lesson description is required"],
  },
});


module.exports = mongoose.model("lesson", lessonSchema)
