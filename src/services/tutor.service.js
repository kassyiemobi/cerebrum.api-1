const CustomError = require("./../utils/custom-error");

class TutorService {

  async createLesson(data) {
    console.log(data);
    return data;
    // return await new Tutor(data).save();
  }

  async getAll() {
    // return await Tutor.find({});
  }

  async getOne(tutorId) {
    // const tutor = await Tutor.findOne({ _id: tutorId });
    // if (!tutor) throw new CustomError("Tutor does not exists");

    // return tutor
  }

  async update(tutorId, data) {
    // const tutor = await Tutor.findByIdAndUpdate(
    // { _id: tutorId },
    // { $set: data },
    // { new: true }
    // );

    // if (!tutor) throw new CustomError("Tutor dosen't exist", 404);

    // return tutor;
  }

  async delete(tutorId) {
    // const tutor = await Tutor.findOne({ _id: tutorId });
    // tutor.remove()
    // return tutor
  }

}

module.exports = new TutorService();