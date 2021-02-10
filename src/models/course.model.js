const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  //_id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: [true, "course name is required!"],
  },

  image_url: {
    type: String,
    required: [true, "course image must be included"],
  },
  image_cover :{
    type: String,
    required: [true, "course image must be included"]
  },

  tutor_id: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "Tutor Id is required"],
    },
   
  price: {
    lifeTime : {
      type: Number,
      required: [true, "A course must have a lifetime price"],
    },
    subscription : {
      type: Number,
      required: [true, "Course subscription Price is required"],
    }
  },
 
  category: {
    type: String,
    required: [true, "Category is required"] 
  },

  description: {
    type: String,
    required: [true, "A course description is required"],
  },
  isActive: {
    type: String,
    enum: [true, false],
    default: true,
  },
  
});

courseSchema.index({ name: "text", category: 'text', description: 'text' });

courseSchema.pre(/^find/, async function (next) {
  if(! this.populate({ 
    path: "tutor_id", 
    select: "firstName lastName image_url" }
    )); return next()
 })

module.exports = mongoose.model("course", courseSchema);
