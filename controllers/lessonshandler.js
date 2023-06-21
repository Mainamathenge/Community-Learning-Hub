const path = require('path');
const multer = require('multer');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const Lesson = require('../models/lessonModel');

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/Lessons/'); // Specify the destination folder
    },
    filename: function (req, file, cb) {
      const extension = path.extname(file.originalname);
      const filename = Date.now() + extension;
      cb(null, filename);
    },
  }),
});

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No joke found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.uploadContent = catchAsync(async (req, res, next) => {
  upload.single('Content')(req, res, async err => {
    if (err) {
      return res.send(err);
    }

    // Retrieve the course ID from req.params
    const lessonId = req.params.id;
    const { file } = req;
    const imagePath = file.path;
    const originalFileName = file.originalname;

    // Update the course with the thumbnail information
    const course = await Lesson.findById(lessonId);
    course.thumbnail = {
      path: imagePath,
      originalName: originalFileName,
    };
    await course.save();

    // Send a response to the client
    res.send('Success, Lesson uploaded');
  });
});

exports.getalllessons = factory.getAll(Lesson);
exports.createlesson = factory.createOne(Lesson);
exports.updatelesson = factory.updateOne(Lesson);
exports.deletelesson = factory.deleteOne(Lesson);
