const cloudinary = require('cloudinary');
const { cloud } = require("./../config");


cloudinary.config({
    cloud_name: cloud.CLOUD_NAME,
    api_key: cloud.API_KEY,
    api_secret: cloud.API_SECRET,
});

exports.uploads = (file) => {
    return new Promise((resolve) => {
      cloudinary.uploader.upload(
        file,
        (movie) => {
          resolve({ url: movie.url, id: movie.public_id });
        },
        { resource_type: "auto" }
      );
    });
  };