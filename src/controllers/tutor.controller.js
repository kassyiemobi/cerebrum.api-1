const { uploads } = require("../services/cloudinary.service");
const TutorServ = require("./../services/tutor.service");
const response = require("./../utils/response");

class TutorContoller {

  async createLesson(req, res) {
    console.log(req.file);
    
    // console.log(req.files.video.name)
  

    // const result = await TutorServ.createLesson(req.files[0].path);
    res.status(201).send(response("tutor created", result));
  } 

  async getAll(req, res) {
    const result = await TutorServ.getAll();
    res.status(200).send(response("All tutor", result));
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
