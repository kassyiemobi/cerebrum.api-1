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
    ref: "course",
  },
},
  {
    timestamps: true,
  }
);

lessonSchema.pre(/^find/, async function (next) {
 if(! this.populate({ 
   path: "course_id", 
   select: "name decription price category image_url tutor_id" }
   ).populate({
    path: "module_id",
    select: "name"
  })); return next()
})


module.exports = mongoose.model("lesson", lessonSchema)
