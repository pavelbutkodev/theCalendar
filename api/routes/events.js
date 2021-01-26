const express = require('express');
const router = express.Router();
const controller = require('../controllers/user')

router.post('/calendar', controller.login);
router.get('/calendar', controller.register);

module.exports = router;