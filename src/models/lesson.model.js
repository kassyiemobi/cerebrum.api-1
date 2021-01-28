const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  name: {
    type: String,
    required: [true, "lesson name is required!"],
  },
  video_url: {
    type: String,
    required: [true, "lesson media must be included"],
  },
  description: {
    type: String,
    required: [true, "Lesson description is required"],
  },
  cloudinary : {
    type: Object,
    conditions: [{}]
  },
  module: {
    type: Schema.Types.ObjectId,
    required: [true, "Module ID is required "],
    ref: "module",
  },
  course: {
    type: Schema.Types.ObjectId,
    required: [true, "Course ID is required "],
    ref: "course",
    default: "12345"
  },
},
  {
    timestamps: true,
  }
);



module.exports = mongoose.model("lesson", lessonSchema)
