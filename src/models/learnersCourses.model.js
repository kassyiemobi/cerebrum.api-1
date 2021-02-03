const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const learnerCoursesSchema = new Schema({
    courseId:{
        type: mongoose.Schema.ObjectId,
        ref: "Course",
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref: "User"
    }

});

learnerCoursesSchema.pre(/^find/, async function (next) {
  await this.populate({
    path: "course",
    select: "name tutor img",
  });
});

const learnerCourses = mongoose.model("Learnercourse", learnerCoursesSchema);

module.exports = learnerCourses;

