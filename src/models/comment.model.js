const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({

  comment: {
     type: String,
     required:[true,' every lesson must have a comment']
  },
  createdAt: {
       type: Date,
       default:Date.now

  },
  //used to make refernce to the lesson and the user that owns the comment.
  lesson :{
       type: mongoose.Schema.ObjectId,
       ref: 'lesson',
       required:[true, 'comment must belong to a lesson']
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

  

)


module.exports = mongoose.model("comment", commentSchema)
