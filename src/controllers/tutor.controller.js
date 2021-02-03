const { cloudUpload } = require("../services/cloudinary.service");
const TutorServ = require("./../services/tutor.service");
const response = require("./../utils/response");

class TutorContoller {
  async courseCreate(req, res) {
    //upload coure Image to cloudinary
    const courseImage = req.files[0].path
    const upload = await cloudUpload(courseImage)

    const result = await TutorServ.courseCreate(req.body, upload);
    res.status(201).send(response("course created", result));
  }

  async moduleCreate(req, res) {
    const result = await TutorServ.moduleCreate(req.body);
    res.status(201).send(response("Module created", result));
  }

  async lessonCreate(req, res) {

    //upload lesson video to cloudinary
    const file = req.files[0].path
    const upload = await cloudUpload(file)
    console.log(upload);
    
    const result = await TutorServ.lessonCreate(req.body, upload);
    res.status(201).send(response("Lesson successfully created", result));

  }

  async getAllCourse(req, res) {
    console.log(req.params.tutorId)
    const result = await TutorServ.getAllCourse(req.params.tutorId);
    res.status(200).send(response("All tutor courses", result));
  }

  async getOne(req, res) {
    const result = await TutorServ.getOne(req.params.tutorId);
    res.status(200).send(response("tutor data", result));
  }

  async update(req, res) {
    const result = await TutorServ.update(req.params.tutorId, req.body);
    res.status(200).send(response("tutor updated", result));
  }

  async delete(req, res) {
    const result = await TutorServ.delete(req.params.tutorId);
    res.status(200).send(response("tutor deleted", result));
  }
}

module.exports = new TutorContoller();
