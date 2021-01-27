const cloudinary = require('cloudinary');
const { cloud } = require("../config");
const multer = require('multer');

cloudinary.config({
    cloud_name: cloud.CLOUD_NAME,
    api_key: cloud.API_KEY,
    api_secret: cloud.API_SECRET,
});

  

  exports.cloudUpload = async (file) => {
    const response = await cloudinary.v2.uploader.upload(file, {
      resource_type: 'auto',
      folder: 'cerebrum/lessons',
    });
    return response;
  };
   
// const cloudUpload = multer ({ storage: storage }); 


