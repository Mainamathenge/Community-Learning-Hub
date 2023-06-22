const express = require('express');
const LessonsHandler = require('../controllers/lessonshandler');

const router = express.Router();

// create the courses
router.route('/').post(LessonsHandler.createOne);
// .get(LessonsHandler.getalllessons)
// .patch(LessonsHandler.updatelesson)
// .delete(LessonsHandler.deletelesson);

// upload the thumb nail
router.route('/pic/:id').post(LessonsHandler.uploadContent);

module.exports = router;
