const cloudinary = require('cloudinary');
const { cloud } = require("../config");
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: cloud.CLOUD_NAME,
    api_key: cloud.API_KEY,
    api_secret: cloud.API_SECRET,
});

// exports.uploads = (file) => {
//     return new Promise((resolve) => {
//       cloudinary.uploader.upload(
//         file,
//         (video) => {
//           resolve({ url: video.url, id: video.public_id });
//         },
//         { resource_type: "auto" }
//       );
//     });
//   };


  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'cerebrum',
      format: async (req, file) => 'mp4', // supports promises as well
      public_id: (req, file) => 'computed-filename-using-request',
    },
  });
   
const parser = multer ({ storage: storage }); 


module.exports =  parser 