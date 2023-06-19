const express = require('express');
const courseHandler = require('../controllers/coursesHandler');

const router = express.Router();

router.route('/pic').post(courseHandler.uploadThumbnail);

module.exports = router;
