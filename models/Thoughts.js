const { Schema, model } = require("mongoose");
const { format, formatDate } = require("date-fns");

const reactions = require("./Reactions");

const thoughtsSchema = new Schema(
  {

    thoughtsText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactions],
  },

  { toJSON: { virtuals: true }, id: false }
);

thoughtsSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

thoughtsSchema.virtual("formattedDate").get(function () {
  return format(this.createdAt, "yyyy-MM-dd HH:mm:ss");
});

const Thoughts = model("thoughts", thoughtsSchema);

module.exports = Thoughts;