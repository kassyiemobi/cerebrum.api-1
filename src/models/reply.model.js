const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = new Schema({
     reply: {
          type:String
     },
     createdAt:{
          Date,
     default :Date.now
     },
     comment:{
          type: mongoose.Schema.ObjectId,
          ref:'comment'
     }
});
replySchema.pre(/^find/, async function (next) {
  if (
    !this.populate({
      path: "comment",
      select: "body",
    })
  );
  return next();
});

module.exports = mongoose.model("reply", replySchema)
