const { Schema, Types } = require("mongoose");
const { format, formatDate } = require("date-fns");

const reactionSchema = new Schema(
  {

    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

reactionSchema.virtual("formattedDate").get(function () {
  return format(this.createdAt, "yyyy-MM-dd HH:mm:ss");
});

module.exports = reactionSchema;