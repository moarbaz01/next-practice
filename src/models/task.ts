import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    due: {
      type: Date,
      required: true,
    },
    image: {
      type: String,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {}
);

export default mongoose.models.Task || mongoose.model("Task", taskSchema);
