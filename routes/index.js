const express = require('express');
const router = express.Router(); 
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

router.get('/about', homeController.about);

router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));

// api
router.use('/api', require('./api'));
module.exports = router;