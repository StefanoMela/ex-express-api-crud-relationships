const express = require("express");
const router = express.Router();
const tagsController = require('../controllers/tags');

const validator = require('../middlewares/validator');
const { bodyData } = require('../validations/tags')
const { paramID } = require('../validations/generic')

router.get('/', tagsController.index);

router.post('/', validator(bodyData), tagsController.create);

router.get('/:id', validator(paramID), tagsController.show);

module.exports = router;