const express = require("express");
const router = express.Router();
const categoryController = require('../controllers/categories');

const validator = require('../middlewares/validator');
const { bodyData } = require('../validations/categories')
const { paramID } = require('../validations/generic')

router.get('/', categoryController.index);

router.post('/', validator(bodyData), categoryController.create);

router.get('/:id', validator(paramID), categoryController.show);


module.exports = router;