const mongoose = require('mongoose');
//const validator = require('validator');
//const bcrypt = require('bcryptjs');

const ObjectID = mongoose.Schema.Types.ObjectId;

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      'DataSience',
      'WebDevelopment',
      'BlockChain',
      'MachineLearning',
      'Business',
    ],
  },
  Description: {
    type: String,
    required: true,
  },
  Instructor: {
    type: ObjectID,
    required: true,
    ref: 'User',
  },
  thumbnail: {
    path: {
      type: String,
      required: true,
    },
    originalName: {
      type: String,
      required: true,
    },
  },
  Lessons: [
    {
      lessonNo: {
        type: Number,
        required: true,
      },
      lessonId: {
        type: ObjectID,
        required: true,
        ref: 'Lesson',
      },
    },
  ],
});

const Course = mongoose.model('Courses', CourseSchema);

module.exports = Course;
