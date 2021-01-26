const multer = require("multer");

const limits = {
  // Maximum file size of 5mb
  fileSize: 5 * 1024 * 1024,
};

const fileFilter = (req, file, cb) => {
  //Accepted file types
  const mimeTypes = ["image/jpeg", "image/png"];

  // Check if file type is accepted
  if (/(png|jpg|jpeg|webp)/.test(file.mimetype.toLowerCase())) {
    cb(null, true);
  } else {
    cb(new CustomError("Invalid file type", 400), false);
  }
};

module.exports = multer({
  storage: multer.memoryStorage(),
  fileFilter,
  limits,
});
