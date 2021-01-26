const cloudinary= require("../services/cloudinary2.service")
const streamifier = require("streamifier");

module.exports = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.v2.uploader.upload_stream((err, res) => {
      if (res) {
        resolve(res);
      } else {
        reject(err);
      }
    });

    streamifier.createReadStream(buffer).pipe(stream);
  });
};
