const express = require('express');
const courseHandler = require('../controllers/coursesHandler');

const router = express.Router();

// create the courses
router
  .route('/')
  .post(courseHandler.createCourse)
  .get(courseHandler.getallcourse)
  .patch(courseHandler.updateCourse)
  .delete(courseHandler.deleteCourse);

// upload the thumb nail
router.route('/pic/:id').post(courseHandler.uploadThumbnail);

module.exports = router;
