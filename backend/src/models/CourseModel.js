import mongoose from 'mongoose';

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    topic: {
        type: String,
      required: true,
    },
    time: {
        type: Number,
        required: true,
    },
    detail: {
        type: String,
      required: true,
    },
    createDay: {
      type: String,
      required: true,
    },
    finishDay: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Course = mongoose.model('Course', courseSchema);
