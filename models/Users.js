const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {

    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [
        /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,})$/,
        "please enter your valid email",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  {

    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const Users = model("users", userSchema);

module.exports = Users;