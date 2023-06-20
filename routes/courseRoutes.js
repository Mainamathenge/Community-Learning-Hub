const express = require('express');
const courseHandler = require('../controllers/coursesHandler');

const router = express.Router();

router.route('/pic').post(courseHandler.uploadThumbnail);
router
  .route('/:id')
  .post(courseHandler.createCourse)
  .get(courseHandler.getallcourse)
  .patch(courseHandler.updateCourse)
  .delete(courseHandler.deleteCourse);

module.exports = router;
