const mongoose = require('mongoose');

const ObjectID = mongoose.Schema.Types.ObjectId;

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  category: {
    type: ObjectID,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Instructor: {
    type: ObjectID,
    required: true,
  },
  contenttype: {
    type: String,
    enum: ['PDF', 'Video', 'Presentation', 'Audio'],
    required: true,
  },
  duration: {
    type: Number,
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
