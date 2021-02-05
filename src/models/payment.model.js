const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: [true, "User ID is required "],
        ref: "user",
    },
    
    course_id: {
    type: Schema.Types.ObjectId,
    required: [true, "Course ID is required "],
    ref: "course"
    },

    paymentType: {
    type: String,
    required: [true, "Payment Type  is required "]
    },
    
    email: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    reference: {
        type: String,
        // required: true
    },
    status: {
        type: Boolean,
        default: true,
    }
},
    {
        timestamps: true,
    }
);


module.exports = mongoose.model("payment", paymentSchema)
