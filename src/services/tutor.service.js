const CustomError = require("./../utils/custom-error");
const Course = require ("./../models/course.model") 
const Module= require ("./../models/module.model") 
const Lesson = require ("./../models/lesson.model") 

class TutorService {

  async courseCreate(data, image) {

    data.image_url = image.secure_url
    return await new Course(data).save();
  }

  async lessonCreate(data,video) {
    data.video_url = video.secure_url
    data.cloudinary = video
    return await new Lesson(data).save();
  }

//for the tutor to find his own courses
  async getAllCourse(data) {
    course_id = data.tutorId
    return await Lesson.find({course_id});
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