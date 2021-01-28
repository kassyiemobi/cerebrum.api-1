const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tutorCoursesSchema = new Schema({
  courseId: {
    type: mongoose.Schema.ObjectId,
    ref: "Course",
  },
  tutor: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

// tutorCoursesSchema.pre(/^find/, async function (next) {
//   await this.populate({
//     path: "course",
//     select: "name _Id img",
//   });
// });

const tutorCourses = mongoose.model("tutorCourses", tutorCoursesSchema);

module.exports = tutorCourses;
