const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const learnerCoursesSchema = new Schema({
    course:{
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

const LearnerCourses = mongoose.model("Learnercourses", learnerCoursesSchema);

module.exports = LearnerCourses;

