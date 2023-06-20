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
    enum: ['DataSience', 'WebDevelopment', 'BlockChain', 'MachineLearning'],
  },
  Description: {
    type: String,
    required: true,
  },
  Instrucctor: {
    type: ObjectID,
    required: true,
    ref: 'User',
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
