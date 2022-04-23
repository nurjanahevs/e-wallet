const express = require('express');
const router = express.Router();
const userRouter = require('./user.routes');

const errorHandler = require('../middlewares/errorHandler')

router.use('/user', userRouter);
router.use(errorHandler);

module.exports = router;

