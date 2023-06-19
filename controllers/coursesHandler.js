/* eslint-disable prefer-template */
const catchAsync = require('../utils/catchAsync');
const path = require('path');
const multer = require('multer');
//const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const { constants } = require('buffer');
const Courses = require('../models/courseCollection');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Uploads is the Upload_folder_name
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg');
  },
});

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Specify the destination folder
    },
    filename: function (req, file, cb) {
      const extension = path.extname(file.originalname);
      const filename = Date.now() + extension;
      cb(null, filename); // Set the filename as the current timestamp + file extension
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
//const doc = await Model.create(req.body);
// exports.uploadThumbnail = catchAsync(async (req, res, next) => {
//   //const course = await Courses.findById(req.params.id);
//   upload(req, res, err => {
//     if (err) {
//       // ERROR occurred (here it can be occurred due
//       // to uploading image of size greater than
//       // 1MB or uploading different file type)
//       res.send(err);
//     } else {
//       // SUCCESS, image successfully uploaded
//       res.send('Success, Image uploaded!');
//     }
//   });
// });

(exports.uploadThumbnail = upload.single('thumbnail')),
  catchAsync(async (req, res, next) => {

    res.send('Success, thumbnail uploaded!');
  });
