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
    type: ObjectID,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Instrucctor: {
    type: ObjectID,
    required: true,
  },
  Lessons: [
    {
      lessonNo: {
        type: Number,
        required: true,
      },
      lessinId: {
        type: ObjectID,
        required: true,
        ref: 'Lesson',
      },
    },
  ],
});

const Courses = mongoose.model('Courses', CourseSchema);

module.exports = Courses;