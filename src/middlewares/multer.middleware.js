const multer = require('multer')

exports.upload = multer({dest: 'uploads'})

// const upload = require("../utils/memoryStorage");



// module.exports = (field) => {
//   return [upload.single(field)];
// };
