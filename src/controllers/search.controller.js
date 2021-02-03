
const courseModel= require("../models/course.model");
const user = require("../models/user.model");

exports.search = async (req, res) => {
  const query = new RegExp(req.query.q, "gi");

  const courses= await courseModel.find({ $text: { $search: query } }).select([
    "_id",
    "title",
  ]);

  const users = await user.find({ $text: { $search: query } }).select([
    "_id",
    "firstName",
    "lastName",
  ]);

  const results = {
    courses,
    users,
  };

  res.status(200).send({ success: true, data: results });
};