const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({

     body: {
     type: String,
     required:[true,' every lesson must have a comment']
  },
  createdAt: {
       type: Date,
       default:Date.now

  },
  //used to make refernce to the lesson and the user that owns the comment.
  course:{
       type: mongoose.Schema.ObjectId,
       ref: 'course',
       required:[true, 'comment must belong to a course']
  },
  user:{
       type: mongoose.Schema.ObjectId,
       ref: 'user',
       required: [true, 'comment must have a user']
  }
},
  {
       toJSON:{ virtuals: true},
       toObject:{ virtuals:true}
  }
);

commentSchema.pre(/^find/, function(next){
    console.log(this)
     this.populate({
          path:'course',
          select: 'name'
     }).populate({
          path:'user',
          select: 'firstName lastName',
          
     })
     next();
})


module.exports = mongoose.model("comment", commentSchema)
