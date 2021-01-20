const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
      name:{
          type: String,
          required:[true, 'course name is required!']

     },
     img:{
          type: String,
          required:[true,'course image must be included']
     },

     price:{
          type: Number,
          required: [true, 'A course must have a price']
     },

     description :{
          type: String,
          required:[true,'A course description is required']
     }
});



module.exports = mongoose.model("course", courseSchema)
