const express = require('express');
const router = express.Router();
const controller = require('../controllers/events')

router.post('/', controller.create);
router.get('/', controller.getAll);
router.delete('/:id', controller.remove);
router.post('/:id', controller.createElem);

module.exports = router;