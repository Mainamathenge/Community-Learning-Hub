const mongoose = require('mongoose');

const ObjectID = mongoose.Schema.Types.ObjectId;

const lessonSchema = new mongoose.Schema({
  course: {
    type: ObjectID,
    ref: 'Course',
  },
  title: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  Description: {
    type: String,
    required: true,
  },
  contenttype: {
    type: String,
    required: true,
  },
  contentpath: {
    type: String,
  },
  lessonNo: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
