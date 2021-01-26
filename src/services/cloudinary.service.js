const cloudinary = require('cloudinary');
const { cloud } = require("../config");
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: cloud.CLOUD_NAME,
    api_key: cloud.API_KEY,
    api_secret: cloud.API_SECRET,
});


  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/lessons')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname)
    }
  })
  

  cloudUploadVideo = async (file) => {
    const response = await cloudinary.v2.uploader.upload(file, {
      resource_type: 'video',
      folder: 'cerebrum/lessons',
    });
  
    return response;
  };
   
const upload = multer ({ storage: storage }); 


module.exports =  {upload, cloudUploadVideo}