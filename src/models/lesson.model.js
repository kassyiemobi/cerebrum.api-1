const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  name: {
    type: string,
    required: [true, "lesson name is required!"],
  },
  video: {
    type: string,
    required: [true, "lesson media must be included"],
  },
  description: {
    type: string,
    required: [true, "Lesson description is required"],
  },
});


module.exports = mongoose.model("lesson", lessonSchema)
