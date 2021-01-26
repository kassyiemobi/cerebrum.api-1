const CustomError = require("./../utils/custom-error");
const Course = require ("./../models/tutor.model") 

class TutorService {

  async create(data) {
    return await new Course(data).save();
  }

//for the tutor to find his own courses
  async getAll() {
    return await TutorCourses.find({user: userId});
  }

// to find one of the tutors courses
  async getOne(courseId) {
    
    const course = await Course.findOne({ _id: courseId });
    if (!course) throw new CustomError("Course does not exists")
  }
  
// for tutor to update his courses
  async updateCourses(courseId, data) {
    const course = await Course.findByIdAndUpdate(
      { _id: courseId },
      { $set: data },
      { new: true }
    );

    if (!course) throw new CustomError("Course dosen't exist", 404);

    return course;
  }
//for tutor to delete his courses
  async deleteCourses(courseId) {
    const course = await Course.findByIdAndDelete({ _id: courseId });
    course.remove();
    return course;
  }
}

module.exports = new TutorService();