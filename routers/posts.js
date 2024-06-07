const express = require("express");
const postController = require('../controllers/posts');
const router = express.Router();

const validator = require('../middlewares/validator');
const { bodyData } = require('../validations/posts')
const { paramID } = require('../validations/generic')

router.get('/', postController.index);

router.post('/', validator(bodyData), postController.create);

router.get('/:slug', validator(paramID), postController.show);

router.put('/:slug', validator(bodyData), postController.update);

router.delete('/:slug', postController.destroy);


module.exports = router;