const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { BCRYPT_SALT } = require("./../config")
const Schema = mongoose.Schema;
const validator = require('validator')


const userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "First Name is required"],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "last Name is required"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required"],
      validate: [
        validator.isEmail,
        "Your email must be in this format: yourname@domain.com",
      ],
    },
    password: {
      type: String,
      required: [true, "Your password is required"],
    },
    image_url: {
      type: String,
      default:
        "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg",
    },
    image_name: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      trim: true,
      enum: ["learner", "tutor", "admin"],
      default: "user",
      required: [true, "User role is required"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.index({ firstName: 'text', lastName: 'text',email:'text', image_url:'text' });


userSchema.pre("save", async function (next) {
  if (!this.isModified('password')) return next()

  const hash = await bcrypt.hash(this.password, BCRYPT_SALT);
  this.password = hash;

  next();
});



module.exports = mongoose.model('user', userSchema)