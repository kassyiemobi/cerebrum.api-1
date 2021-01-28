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
  module_id: {
    type: Schema.Types.ObjectId,
    required: [true, "Module ID is required "],
    ref: "module",
  },
  course_id: {
    type: Schema.Types.ObjectId,
    ref: "courses",
  },
},
  {
    timestamps: true,
  }
);

// lessonSchema.pre(/^find/, async function (next) {
//   await this.populate({
//     path: "course",
//     select: "name",
//   });
// });


module.exports = mongoose.model("lesson", lessonSchema)
