const router = require('express').Router();

const testRouter = require('./routes/testRouter.js');



router.use('/test', testRouter);



module.exports = router;
